require('dotenv').config();
const express = require('express');
const { Client, GatewayIntentBits } = require('discord.js');

const BOT_TOKEN = process.env.BOT_TOKEN;
const GUILD_ID  = process.env.GUILD_ID;
const ROLE_ID   = process.env.ROLE_ID;
const SECRET    = process.env.WEBHOOK_SECRET;

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
});

client.once('ready', () => {
  console.log(`[Bot] Inloggad som ${client.user.tag}`);
});

const app = express();
app.use(express.json());

app.post('/webhook', async (req, res) => {
  if(req.headers['x-webhook-secret'] !== SECRET) {
    console.warn('Ogiltig webhook-secret:' + req.headers['x-webhook-secret']);
    return res.sendStatus(401);
  }

  const { discord_id } = req.body;
  if(!discord_id) {
    console.warn('Inget discord_id i payload');
    return res.sendStatus(400);
  }
  try {
    const guild = await client.guilds.fetch(GUILD_ID);
    const member = await guild.members.fetch(discord_id);
    await member.roles.add(ROLE_ID);
    console.log(`[Webhook] Roll tillagd för ${member.user.tag}`);
    res.sendStatus(200);
  } catch(err) {
    console.error('Fel vid roll-tilldelning:', err);
    res.sendStatus(500);
  }
});

client.login(BOT_TOKEN);

const listenerPort = process.env.PORT || 3000;
app.listen(listenerPort, () => {
  console.log(`[Webhook] Lyssnar på :${listenerPort}`);
});

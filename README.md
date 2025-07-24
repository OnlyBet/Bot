# OnlyBet Discord Bot

## Kom igång

1. Skapa en Discord-bot i [Discord Developer Portal](https://discord.com/developers/applications)
2. Aktivera **Server Members Intent** under bot-inställningarna.
3. Kopiera din bot-token och fyll i `.env`-filen.
4. Hitta din Discord-server-ID och rollen du vill ge (högerklicka → Kopiera ID i Discord med utvecklarläge på).
5. Sätt en valfri `WEBHOOK_SECRET` för säkerhet.
6. Starta botten med `node index.js` (eller kör i Replit).
7. Ställ in din betalningsplattform (HiHat/Stripe) att skicka webhook till `https://din-url/webhook`
   - Skicka JSON med `{ "discord_id": "användarens-discord-id" }`
   - Lägg till headern `X-Webhook-Secret: din-hemliga-sträng`

## Tips

- Använd UptimeRobot för att ping webhook-URL var 5:e minut om du kör i Replit så den inte går i vila.
- Var försiktig med din bot-token — dela den inte offentligt!

---

Behöver du hjälp? Hör av dig!

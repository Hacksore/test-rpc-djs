import "dotenv/config"
import RPC from "discord-rpc";
const scopes = ["rpc"];

const { CLIENT_ID, CLIENT_SECRET } = process.env;
const client = new RPC.Client({ transport: "ipc" });

client.on("ready", async () => {
  console.log("Logged in as", client.application.name);
});

// Log in to RPC with client id
client.login({ 
  clientId: CLIENT_ID, 
  prompt: "none",
  clientSecret: CLIENT_SECRET,
  scopes, 
  redirectUri: "http://localhost:3000"
});

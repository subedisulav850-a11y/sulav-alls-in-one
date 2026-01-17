async function longBio(){
  const uid = document.getElementById("bioUid").value;
  const res = await fetch(`https://danger-long-bio.vercel.app/?uid=${uid}`);
  const data = await res.text();
  document.getElementById("bioResult").innerText = data;
}

async function addFriend(){
  const uid = document.getElementById("friendUid").value;
  const target = document.getElementById("targetUid").value;
  const res = await fetch(`https://danger-add-friend.vercel.app/?uid=${uid}&target=${target}`);
  const data = await res.text();
  document.getElementById("friendResult").innerText = data;
}

async function guildInfo(){
  const uid = document.getElementById("guildUid").value;
  const res = await fetch(`https://guild-info-danger.vercel.app/?uid=${uid}`);
  const data = await res.text();
  document.getElementById("guildResult").innerText = data;
}

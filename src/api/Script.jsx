import React, { useEffect, useState } from "react";

const clientId = "6e97f195099b45e1bb476e1954f63d7e"; // Replace with your client id

function App() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (!code) {
      redirectToAuthCodeFlow(clientId);
    } else {
      getAccessToken(clientId, code)
        .then((accessToken) => {
          fetchProfile(accessToken)
            .then((profile) => {
              setProfile(profile);
            })
            .catch((error) => {
              console.error("Error fetching profile:", error);
            });
        })
        .catch((error) => {
          console.error("Error getting access token:", error);
        });
    }
  }, []);

  async function redirectToAuthCodeFlow(clientId) {
    // TODO: Redirect to Spotify authorization page
    const verifier = generateCodeVerifier(128);
    const challenge = await generateCodeChallenge(verifier);

    localStorage.setItem("verifier", verifier);

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("response_type", "code");
    params.append("redirect_uri", "http://localhost:5173/callback");
    params.append("scope", "user-read-recently-played");
    params.append("code_challenge_method", "S256");
    params.append("code_challenge", challenge);

    // Redirect to the authorization page with the generated parameters
    window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
  }

  function generateCodeVerifier(length) {
    let text = "";
    const possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  async function generateCodeChallenge(codeVerifier) {
    const data = new TextEncoder().encode(codeVerifier);
    const digest = await window.crypto.subtle.digest("SHA-256", data);
    const base64String = btoa(String.fromCharCode(...new Uint8Array(digest)))
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
    return base64String;
  }

  async function getAccessToken(clientId, code) {
    const verifier = localStorage.getItem("verifier");

    if (!verifier) {
      throw new Error("Verifier not found in localStorage");
    }

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("redirect_uri", "http://localhost:5173/callback");
    params.append("code_verifier", verifier);

    try {
      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      });

      if (!response.ok) {
        throw new Error("Failed to obtain access token");
      }

      const data = await response.json();
      const accessToken = data.access_token;

      if (!accessToken) {
        throw new Error("Access token not found in response");
      }

      return accessToken;
    } catch (error) {
      console.error("Error getting access token:", error.message);
      throw error;
    }
  }

  async function fetchProfile(token) {
    // TODO: Call Web API
    const result = await fetch(
      "https://api.spotify.com/v1/me/player/recently-played",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return await result.json();
  }

  function populateUI(profile) {
    if (profile) {
      return (
        <div>
          <p>Recently Played: {profile.items[0].track.name}</p>
          <p>Artist: {profile.items[0].track.artists[0].name}</p>
        </div>
      );
    } else {
      return null;
    }
  }

  return (
    <div className="App">
      <h1>Spotify Profile</h1>
      {populateUI(profile)}
    </div>
  );
}

export default App;

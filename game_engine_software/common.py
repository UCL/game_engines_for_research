import requests
import os


def get_url(url: str):
    """A wrapper for getting urls."""
    user_agent = os.environ.get("GES_USER_AGENT")
    user_email = os.environ.get("GES_EMAIL")
    headers = {"User-Agent": user_agent, "From": user_email}
    payload = requests.get(url, headers=headers)
    return payload.json()

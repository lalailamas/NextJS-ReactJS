  async function getHttp() {
    const res = await fetch("https://eokyg5j5on90it0.m.pipedream.net/");
    const data = await res.json();
    return data.data;
  }

export default getHttp;
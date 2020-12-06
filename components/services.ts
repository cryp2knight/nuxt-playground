import axios  from "axios";
import qs from 'qs';


async function hotels() {
    let access_token = await axios({
        method: 'post',
        url: 'https://test.api.amadeus.com/v1/security/oauth2/token',
        data: qs.stringify({
          grant_type: 'client_credentials',
          client_id: 'hsbz8B69OzMwUOp6DD9OPGM72BE6vmLj',
          client_secret: '2KbzcheDocuMAj9r',
        }),
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    })
    console.log(access_token);
}


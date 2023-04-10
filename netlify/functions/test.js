exports.handler = async function (event, context) {
    return {
        statusCode: 200, 
        body: JSON.stringify({
            name: 'CAIN',
            age: 85,
            email: "water1793@naver.com"
        })
    }
  };
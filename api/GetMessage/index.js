module.exports = async function (context, req) {
  const date = "2022-01-01"
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

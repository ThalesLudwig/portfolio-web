const parser = (data) => {
  const messages = [];

  if (typeof data === "string") {
    return {
      id: Math.random(),
      text: data,
      isPrimary: true,
      hasAvatar: true,
    };
  }

  for (let i = 0; i < data.length; i++) {
    const currentResponse = data[i];
    if (typeof currentResponse === "string") {
      messages.push({
        id: Math.random(),
        text: currentResponse,
        isPrimary: true,
        hasAvatar: i === 0,
      });
    } else {
      if (typeof currentResponse.data === "string") {
        messages.push({
          id: Math.random(),
          text: currentResponse.data,
          isPrimary: true,
          hasAvatar: true,
        });
      } else {
        for (let j = 0; j < currentResponse.data.length; j++) {
          messages.push({
            id: Math.random(),
            text: currentResponse.data[j],
            isPrimary: true,
            hasAvatar: j === 0 && i === 0,
          });
        }
      }
    }
    if (!!currentResponse.meta && currentResponse.meta.length > 0) {
      messages.push({
        id: Math.random(),
        isPrimary: true,
        hasAvatar: false,
        media: currentResponse.meta,
      });
    }
  }

  return messages;
};

export default parser;

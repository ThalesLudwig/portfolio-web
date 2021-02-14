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
    messages.push({
      id: Math.random(),
      text: data[i],
      isPrimary: true,
      hasAvatar: i === 0,
    });
  }

  return messages;
};

export default parser;

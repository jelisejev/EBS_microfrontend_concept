const fetchContacts = async () => {
  return new Promise((resolve) => {
    const contcats = [];
    for (let i = 0; i <= 15; i++) {
      contcats.push({
        name: 'Mr Alexander Puschkin',
      });
    }

    resolve(contcats);
  });
};

export {
  fetchContacts,
};

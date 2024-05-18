function createUserProfiles(names, newNames) {
    const userProfiles = [];

    for (let i = 0; i < names.length; i++) {
        const userProile = {
            actualName : names[i],
            newName : newNames[i],
            id : i + 1,
        };

        userProfiles.push(userProile);
    }

    return userProfiles;
}

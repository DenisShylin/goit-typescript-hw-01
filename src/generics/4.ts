type UserData = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<UserData>): UserData {
  const defaults: UserData = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };

  return { ...defaults, ...initialValues };
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});

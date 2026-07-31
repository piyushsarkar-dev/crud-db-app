import { faker } from "@faker-js/faker/locale/en_IN";

const generateUserDetails = () => {
  const { person, internet, helpers } = faker;

  const gender = person.sexType();

  const firstName = person.firstName(gender);
  const lastName = person.lastName(gender);
  const fullName = `${firstName} ${lastName}`;

  const email = internet
    .email({
      firstName,
      lastName,
    })
    .toLowerCase();

  // Indian mobile number (+91XXXXXXXXXX)
  const firstDigit = helpers.arrayElement(["6", "7", "8", "9"]);
  const phone = `+91${firstDigit}${faker.string.numeric(9)}`;

  return {
    fullName,
    email,
    phone,
    gender,
  };
};

export default generateUserDetails;

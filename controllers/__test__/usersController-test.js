const { getAllUsers, getUserById } = require('../queries/usersQueries');
const usersData = require('../usersData.json');

describe('getAllUsers', () => {
  it('should return all users', async () => {
    // Mock any database fetch or API call
    // For simplicity, we'll just return the provided user data
    const expectedResult = usersData;

    const result = await getAllUsers();
    expect(result).toEqual(expectedResult);
  });
});

describe('getUserById', () => {
  it('should return the correct user for a valid ID', async () => {
    const userId = 1;
    const expectedResult = usersData.find(user => user.id === userId);

    const result = await getUserById(userId);
    expect(result).toEqual(expectedResult);
  });

  it('should return null for an invalid ID', async () => {
    const invalidUserId = 100; // Assuming this ID doesn't exist
    const expectedResult = null;

    const result = await getUserById(invalidUserId);
    expect(result).toEqual(expectedResult);
  });
});
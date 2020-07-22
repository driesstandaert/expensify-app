const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}`

test('should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7)
});

test(`Should display the name`, () => {
    const result = generateGreeting('Dries')
    expect(result).toBe('Hello Dries')
})

test(`Should display the name`, () => {
    const result = generateGreeting()
    expect(result).toBe('Hello Anonymous')
})
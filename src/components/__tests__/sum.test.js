import sum from "../sum"

test("Sum of two numbers",()=>{    //uuuu can use it() inplace of test()
    const result = sum(5,7);

    expect(result).toBe(12);
})
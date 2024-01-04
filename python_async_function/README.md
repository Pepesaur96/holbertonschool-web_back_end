In Python, the async and await keywords are used for asynchronous programming. Asynchronous programming allows you to write code that can perform other tasks while waiting for certain operations to complete, without blocking the execution.

## Async and Await Syntax:

1. Async Function:

   async def my_async_function(): # Async code here

2. Await Expression:

   result = await some_async_function()

## Executing an Async Program with asyncio:

    import asyncio

    async def main():
        # Your async code here

    # Run the event loop
    asyncio.run(main())

## Running Concurrent Coroutines:

    import asyncio

    async def coroutine1():
        # Async code for coroutine 1

    async def coroutine2():
        # Async code for coroutine 2

    async def main():
        # Run coroutines concurrently
        await asyncio.gather(coroutine1(), coroutine2())

    # Run the event loop
    asyncio.run(main())

## Creating Asyncio Tasks:

    import asyncio

    async def my_task():
        # Async code for the task

    async def main():
        # Create an asyncio task
        task = asyncio.create_task(my_task())

        # Run other code concurrently with the task
        await asyncio.sleep(1)

        # Wait for the task to complete
        await task

    # Run the event loop
    asyncio.run(main())

## Using the random Module in Async Code:

    import asyncio
    import random

    async def random_task():
    delay = random.uniform(0.1, 0.5)
    await asyncio.sleep(delay)
    return f"Task completed after {delay:.2f} seconds"

    async def main():
    tasks = [random_task() for _ in range(5)]

        # Run tasks concurrently
        results = await asyncio.gather(*tasks)

        for result in results:
            print(result)

    # Run the event loop

    asyncio.run(main())

In this example, random.uniform(0.1, 0.5) generates a random float between 0.1 and 0.5, simulating different delays for each task. The asyncio.gather function is used to run the tasks concurrently, and the results are printed once all tasks are completed.

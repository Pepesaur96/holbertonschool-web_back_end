#!/usr/bin/env python3
"""Function task_wait_n. The code is nearly identical
to wait_n except task_wait_random is being called."""

import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Returns a list of all the delays"""
    delays = []
    for i in range(n):
        delays.append(await task_wait_random(max_delay))
    return sorted(delays)

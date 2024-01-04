#!/usr/bin/env python3
"""type-annotated function takes a string
and an int as arguments and returns a tuple."""
from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """type-annotated function takes a string
    and an int as arguments and returns a tuple."""
    return (k, v * v)

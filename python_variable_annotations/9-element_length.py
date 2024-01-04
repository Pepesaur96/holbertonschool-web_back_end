#!/usr/bin/env python3
"""Type-annotated function element_length that takes a list lst
of strings and returns a list of integers representing
the lengths of the corresponding strings."""
from typing import List, Iterable, Tuple, Sequence


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Return list of tuples of strings and ints"""
    return [(i, len(i)) for i in lst]

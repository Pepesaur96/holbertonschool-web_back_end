#!/usr/bin/env python3
"""Type-annotated function sum_mixed_list which takes a list mxd_lst
of floats and integers and returns their sum as a float."""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Return sum of floats and ints in mxd_lst"""
    return sum(mxd_lst)

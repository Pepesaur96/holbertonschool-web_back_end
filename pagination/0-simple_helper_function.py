#!/usr/bin/env python3
"""function named index_range that takes two
integer arguments page and page_size."""


def index_range(page, page_size):
    """
    Calculate start and end index for pagination parameters
    """
    start = (page - 1) * page_size
    end = page * page_size
    return start, end

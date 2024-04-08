import unittest
from unittest.mock import MagicMock

from main import *


class TestCloudFunction(unittest.TestCase):
    def setUp(self):
        self.request = MagicMock()
        self.request.method = "GET"
        self.request.headers = {}
        self.request.body = None

    def test_on_request_example(self):
        response = on_request_example(self.request)
        self.assertEqual(response.status_code, 200)

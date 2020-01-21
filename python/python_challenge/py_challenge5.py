import urllib.request
import re

def hasNumbers(page):
    return bool(re.search(r'\d', str(page)))

def find_number(page):
    code = re.search("[0-9]{1,5}", str(page)).group()
    return code

site = urllib.request.urlopen('http://www.pythonchallenge.com/pc/def/linkedlist.php?nothing=10466')
code = find_number(site)

while hasNumbers(page):
    site = urllib.request.urlopen('http://www.pythonchallenge.com/pc/def/linkedlist.php?nothing='+code)
    site = site.read()
    code = find_number(site)
    print(code)

from django.http import HttpResponse

def index(request):
    line1 = '<h1 style="text-align: center">星空</h1>'
    line2 = '<hr>'
    line3 = '<img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.tt98.com%2Fbizhi%2F20191201%2F90f304d96a41cdf310e77abf87926b1a.jpg&refer=http%3A%2F%2Fimg1.tt98.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641032240&t=4a7a01c6817f055a199fdc2f9aab47d7" width=2000>'
    return HttpResponse(line1 + line2 + line3)

def play(request):
    line1 = '<h1 style="text-align: center"></h1>'
    line2 = '<img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F2ec97bbedc2f00d35ac09b2f8b22a1c941cedf01.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641033243&t=2d3225acf5dbc9e93241f006f247302a">'
    return HttpResponse(line1 + line2)

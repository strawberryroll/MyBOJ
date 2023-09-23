a,b,c=map(int,input().split())
if a==b and b==c:
    print(10000+a*1000)
elif a==b and b!=c:
    print(1000+a*100)
elif a!=b and b==c:
    print(1000+b*100)
elif a!=b and b!=c and a==c:
    print(1000+a*100)
else:
    if a>b:
        a,b=b,a
    if b>c:
        b,c=c,b
    print(c*100)
    




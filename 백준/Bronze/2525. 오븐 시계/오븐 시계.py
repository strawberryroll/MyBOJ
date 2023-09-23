h,m=map(int,input().split())
a=int(input())

if h<=23 and a+m>=60:
    h=h+((a+m)//60)
    m=(a+m)-(60*((a+m)//60))
    if h>23:
        h=h-24

else:
    m=m+a

print(h,m)


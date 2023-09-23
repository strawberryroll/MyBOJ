T=int(input())
l=[]
for i in range(1,T+1):
    a,b=map(int,input().split())
    l.append(a+b)
for i in range(0,T):
    print(l[i])
    
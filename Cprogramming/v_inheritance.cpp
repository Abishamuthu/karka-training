/////Diomand problem /////
#include <iostream>
using namespace std;
class A{
    public:
    void fun(){
        cout <<"welcome Abi";
    }
};
class B :virtual public A{
    
};
class C :virtual public A{
    
};
class D : public B,public C{
    
};
int main(){
    D obj;
        obj.fun();
   
    return 0;
}
class Node:
    def __init__(self,value):
        self.info=value
        self.link=None

class SingleLinkedList:
    def __init__(self):
        self.start=None

    def display_list(self):
        if self.start is None:
            print("Empty List")
            return
        else:
            print("List is : ")
            p = self.start
            while p is not None:
                print(p.info, " ", end='')
                p=p.link
            print()

    def count_nodes(self):
        p = self.start
        n = 0
        while p is not None:
            n+=1
            p = p.link
        print("Number of nodes in the list = ", n)

    def search(self,x):
        position = 1
        p = self.start
        while p is not None:
            if p.info == x:
                print(x, " is at position ", position)
                return True
            position += 1
            p = p.link
        else:
            print(x," not found in the list")
            return False

    def insert_in_beginning(self,data):
        temp = Node(data)
        temp.link = self.start
        self.start = temp

    def insert_at_end(self,data):
        temp = Node(data)
        if self.start is None:
            self.start = temp
            return

        p = self.start
        while p.link is not None:
            p = p.link
        p.link = temp

    def create_list(self):
        n = int(input("Enter the number of Nodes: "))
        if n == 0:
            return
        for i in range(n):
            data = int(input("Enter the element to be inserted : "))
            self.insert_at_end(data)

    def insert_after(self, data, x):
        p = self.start
        while p is not None:
            if p.info == x:
                break
            p = p.link

        if p is None:
            print(x," is not present in the list")
        else:
            temp = Node(data)
            temp.link = p.link
            p.link = temp

    def insert_before(self,data,x):
        while self.start is None:
            print("List is empty")
            return

        # if x is the first node then the new node has to be inserted at the beginning
        if x = self.start.info:
            temp = Node(data)
            temp.link = self.start
            self.start = temp
            return

        # find reference to predecessor of node containing x
        p = self.start
        while p.link is not None:
            if p.link.info == x:
                break
            p = p.link

        if p.link is None:
            print(x," is not present in the list")
        else:
            temp = Node(data)
            temp.link = p.link
            p.link = temp
            
    def insert_at_position(self, data,k):
        if k == 1:
            temp = Node(data)
            temp.link = self.start
            self.start = temp
            return

        p = self.start
        i = 1
        while i<k-1 and p is not None:
            p = p.link
            i += 1

        if p is None:
            print("You can insert only upto position ", i)
        else:
            temp = Node(data)
            temp.link = p.link
            p.link = temp

    def delete_node(self,x):
        if self.start is None:
            print("List is empty")
            return
        
        #To delete first Node 
        if self.start.info == x:
            self.start = self.start.link
            return

        # To delete in between or at the end
        p = self.start
        if p.link is not None:
            if p.link.info == x:
                break
            p = p.link

        if p.link is None:
            print("Element ", x, "not in the list")
        else:
            p.link = p.link.link

    def delete_first_node(self):
        if self.start is None:
            return
        self.start = self.start.link

    def delete_last_node(self):
        if self.start is None:
            return

        if self.start.link is None:
            self.start = None
            return

        p = self.start
        if p.link.link is not None:
            p = p.link
        p.link = None

    def reverse_list(self):
        prev = None
        p = self.start
        while p is not None:
            next = p.link
            p.link = prev
            prev = p
            p = next
        self.start = prev

    def bubble_sort_exdata(self):
        end = None

        while end != self.start.link:
            p = self.start
            while p.link != end:
                q = p.link
                if p.info > q.info:
                    p.info,q.info = q.info,p.info
                p = p.link
            end = p

    def bubble_sort_exlinks(self):
        end = None
        while end != self.start.link:
            r = p = self.start
            while p.link != end:
                q = p.link
                if p.info > q.info:
                    p.link = q.link
                    q.link = p
                    if p != self.start:
                        r.link = q
                    else:
                        self.start = q
                    p,q = q,p
                r = p
                p = p.link
            end = p

    def has_cycle(self):
        pass

list = SingleLinkedList()
list.create_list()

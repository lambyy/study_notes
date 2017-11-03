print("hello world")

x = 1
if x == 1:
    print("x is 1.")

x = object()
y = object()

x_list = [x] * 10
y_list = [y] * 10
big_list = x_list + y_list

print(len(x_list))
print(len(y_list))
print(len(big_list))

print("hello %x" % 29)

data = ("John", "Doe", 53.44)
format_string = "Hello %s %s. Your balance is $%s."
print(format_string % data)

# for num in numbers:
#     if num == 237:
#         break
#     if num % 2 == 0:
#         print(num)

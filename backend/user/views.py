from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import User

@api_view(['POST'])
def register(request):
    try:
        data = request.data

        if User.objects.filter(userId=data['userId']).exists():
            return Response({"error": "User already exists"}, status=400)

        user = User.objects.create(
            userId=data['userId'],
            name=data['name'],
            email=data['email'],
            password=data['password'],
            isAdmin=data.get('isAdmin', False)  # ✅ admin option
        )

        return Response({
            "userId": user.userId,
            "isAdmin": user.isAdmin
        })

    except Exception as e:
        return Response({"error": str(e)}, status=500)


# ✅ LOGIN
@api_view(['POST'])
def login(request):
    try:
        data = request.data

        user = User.objects.get(userId=data['userId'], password=data['password'])

        return Response({
            "userId": user.userId,
            "isAdmin": user.isAdmin
        })

    except User.DoesNotExist:
        return Response({"error": "Invalid credentials"}, status=400)
    
@api_view(['GET'])
def get_user(request, userId):
    try:
        user = User.objects.get(userId=userId)
        return Response({
            "userId": user.userId,
            "name": user.name,
            "email": user.email,
            "isAdmin": user.isAdmin
        })
    except User.DoesNotExist:
        return Response({"error": "User not found"}, status=404)
    

@api_view(['DELETE'])
def delete_user(request, userId):
    try:
        admin_id = request.data.get("adminId")

        admin = User.objects.get(userId=admin_id)

        # ❌ Not admin
        if not admin.isAdmin:
            return Response({"error": "Not authorized"}, status=403)

        # ❌ Prevent self-delete
        if admin_id == userId:
            return Response(
                {"error": "Admin cannot delete themselves"},
                status=400
            )

        user = User.objects.get(userId=userId)
        user.delete()

        return Response({"message": "User deleted successfully"})

    except User.DoesNotExist:
        return Response({"error": "User not found"}, status=404)
    
@api_view(['GET'])
def get_all_users(request):
    try:
        admin_id = request.GET.get("adminId")

        admin = User.objects.get(userId=admin_id)

        # ❌ Only admin allowed
        if not admin.isAdmin:
            return Response({"error": "Not authorized"}, status=403)

        users = User.objects.all().values("userId", "name", "email", "isAdmin")

        return Response(list(users))

    except User.DoesNotExist:
        return Response({"error": "Admin not found"}, status=404)
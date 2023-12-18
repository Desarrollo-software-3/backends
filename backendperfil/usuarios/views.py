from django.shortcuts import render
from django.shortcuts import render
from django.http import HttpResponse
from usuarios.models import Usuario

from django.http import JsonResponse
from usuarios.models import Usuario
import json
from django.views.decorators.csrf import csrf_exempt



def obtener_usuario_por_correo(request):
    print('okey')
    correo = request.GET.get('correo')  # Obtiene el parámetro 'correo' de la solicitud GET

    if correo:  # Verifica si se ha proporcionado un correo
        try:
            usuario = Usuario.objects.get(correo_electronico=correo)
            # Construye un diccionario con los campos deseados del usuario
            usuario_info = {
                'nombre': usuario.nombre_usuario,
                'correo': usuario.correo_electronico,
                'foto2': usuario.foto2,
                'nombres': usuario.nombres,
                'apellidos': usuario.apellidos,
                'tipoidentificacion': usuario.tipo_identificacion,
                'numero': usuario.numero_identificacion,
                'fecha_nacimiento': usuario.fecha_nacimiento,
                'telefono': usuario.telefono,
                'ubicacion': usuario.ubicacion
                
            }
            return JsonResponse(usuario_info)  # Retorna la información del usuario como JSON
        except Usuario.DoesNotExist:
            return JsonResponse({'mensaje': 'El usuario no ha sido encontrado.'})
    else:
        return JsonResponse({'mensaje': 'No se proporcionó un correo electrónico para buscar al usuario.'})


@csrf_exempt
def editar_usuario_por_correo(request):
    if request.method == 'POST':
        correo = request.POST.get('correo')
        nuevo_nombre = request.POST.get('nuevo_nombre')
        nueva_foto2 = request.POST.get('nueva_foto2')
        nuevos_nombres = request.POST.get('nuevos_nombres')
        print(correo)
        if correo:  
            try:
                usuario = Usuario.objects.get(correo_electronico=correo)
                usuario.nombre_usuario = nuevo_nombre  # Actualiza el nombre
                usuario.foto2 = nueva_foto2  # Actualiza la foto2
                usuario.nombres = nuevos_nombres  # Actualiza los nombres
                usuario.save()  # Guarda los cambios en la base de datos

                usuario_info = {
                    'nombre': usuario.nombre_usuario,
                    'correo': usuario.correo_electronico,
                    'foto2': usuario.foto2,
                    'nombres': usuario.nombres,
                    # Otros campos del usuario...
                }

                return JsonResponse(usuario_info)  # Retorna la información actualizada del usuario como JSON
            except Usuario.DoesNotExist:
                return JsonResponse({'mensaje': 'El usuario no ha sido encontrado.'})
        else:
            return JsonResponse({'mensaje': 'No se proporcionó un correo electrónico para buscar al usuario.'})
    else:
        return JsonResponse({'mensaje': 'No se ha realizado una solicitud POST.'})








#------------------------
from django.http import JsonResponse
from .models import Usuario  # Asegúrate de importar tu modelo Usuario

def actualizar_usuario_por_correo(request):
   print('-----')
   print(request)
   ''' if request.method == 'POST':
        data = json.loads(request.body)
        correo = data.get('correo')
        print('sssss')
        print(correo)

        if correo:
            try:
                usuario = Usuario.objects.get(correo_electronico=correo)

                # Actualizar los campos del usuario
                usuario.nombres = data.get('nuevos_nombres')
                usuario.apellidos = data.get('nuevos_apellidos')
                usuario.telefono = data.get('nuevo_telefono')
                usuario.ubicacion = data.get('nueva_ubicacion')

                # Guardar los cambios
                usuario.save()

                return JsonResponse({'mensaje': 'Datos del usuario actualizados correctamente.'})

            except Usuario.DoesNotExist:
                return JsonResponse({'error': 'El usuario no ha sido encontrado.'})
        else:
            return JsonResponse({'error': 'No se proporcionó un correo electrónico para buscar al usuario.'})
    else:
        return JsonResponse({'error': 'Se esperaba una solicitud POST para actualizar los datos del usuario.'})'''
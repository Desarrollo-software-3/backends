from django import forms
from django.db import models
import binascii
def custom_file_name(instance, filename):
    return f'fotos_usuarios/{instance.nombre_usuario}.png'
class Usuario(models.Model):
    nombre_usuario = models.CharField(max_length=50)
    correo_electronico = models.EmailField(unique=True)
    foto = models.ImageField(upload_to=custom_file_name, blank=True, null=True, default='fotos_usuarios/default.png')
    foto2 = models.CharField(max_length=2**31 - 1, default='https://img.freepik.com/vector-premium/icono-perfil-usuario-estilo-plano-ilustracion-vector-avatar-miembro-sobre-fondo-aislado-concepto-negocio-signo-permiso-humano_157943-15752.jpg')
    nombres = models.CharField(max_length=50)
    apellidos = models.CharField(max_length=50)

    # Definición de las opciones para tipo_identificacion
    TI = 'TI'
    CC = 'CC'
    CEDULA_EXTRANJERA = 'CEDULA Extranjera'

    OPCIONES_IDENTIFICACION = [
        (TI, 'TI'),
        (CC, 'CC'),
        (CEDULA_EXTRANJERA, 'CEDULA Extranjera'),
    ]

    tipo_identificacion = models.CharField(max_length=50, choices=OPCIONES_IDENTIFICACION)
    
    numero_identificacion = models.CharField(max_length=20)
    fecha_nacimiento = models.DateField()
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    correo = models.BooleanField(default=False)
    telefono= models.CharField(max_length=10, default='0000000000')
    ubicacion= models.CharField(max_length=50 ,default='Cali')
 

    def _str_(self):
        return self.nombre_usuario
''' def save(self, *args, **kwargs):
        if self.foto:  # Verifica si hay una imagen cargada
            with self.foto.open(mode='rb') as img_file:
                encoded_bytes = img_file.read()
                encoded_string = binascii.hexlify(encoded_bytes).decode('utf-8')
                self.foto = f"data:image/png;base16,{encoded_string}"
                print(self.foto)  # Verifica la cadena codificada en la consola antes de guardar

        super().save(*args, **kwargs)'''
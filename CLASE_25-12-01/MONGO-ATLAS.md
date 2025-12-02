# Mongo db

1. Ir a https://www.mongodb.com/
2. Crear cuenta, con acceso rápido con Google
3. Crear Cluster

   - Asignar nombre
   - Elegir proveedor y región
   - Configurar opciones de cluster
   - Elegir plan (gratis)
   - Asignar etiquetas
   - Revisar y crear cluster
   - Asignar modo de conexión

4. Crear usuario de base de datos

## count mauriciogaston.coderhouse@gmail.com

- Cluster: Cluster01
  - AWS - Brasil
- Tag: {application: coder}


## Network Access

Ir a network access y agregar IP

- Add IP address
  - Allow access from anywhere
  - Confirmar

Para simplificar, permitir acceso desde cualquier IP (0.0.0.0/0 que es la IP pública), pero en producción no es recomendable.

## Browser collection

Ir a Clusters -> Collections -> Create Database

- Database name: ecommerce
  - Collection name: products

---

## Código de conexión - Test con base de datos 'school'

### Conexión con MONGOOSE
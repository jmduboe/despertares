# Despertares - Sistema de Gestión Terapéutica

Monorepo para centro terapéutico infantil con Next.js + React Admin + NestJS + Prisma.

## 🏗️ Arquitectura

```
despertares-monorepo/
├── apps/
│   ├── backend/          # NestJS + Prisma + SQLite
│   └── frontend/         # Next.js + React Admin
├── packages/shared/       # Tipos compartidos
└── turbo.json          # Configuración monorepo
```

## 🚀 Stack Tecnológico

### Frontend (apps/frontend)
- **Framework**: Next.js 15 con App Router
- **UI**: React Admin + shadcn/ui
- **Styling**: Tailwind CSS
- **Types**: TypeScript
- **HTTP Client**: Axios

### Backend (apps/backend)
- **Framework**: NestJS
- **Database**: SQLite (dev) / PostgreSQL (prod)
- **ORM**: Prisma
- **Auth**: JWT + Passport
- **Validation**: Zod

### Infraestructura
- **Monorepo**: Turbo + npm workspaces
- **Package Manager**: npm
- **Deployment**: Docker / Vercel / Railway

## 📋 Funcionalidades

### ✅ Implementadas
- **Gestión de Pacientes** - CRUD completo
- **Gestión de Profesionales** - CRUD completo
- **Gestión de Terapias** - CRUD completo
- **Gestión de Usuarios** - CRUD con roles
- **Asignación de Terapias** - PatientTherapy con formularios inline
- **Registros Diarios** - DailyRecord con asistencia
- **Autorizaciones OS** - AuthorizationOS con control de sesiones

### 🔄 En Progreso
- **Reportes** - Report con filtros y exportación
- **Disponibilidad** - ProfessionalAvailability
- **Especialidades** - ProfessionalSpecialty
- **Horarios** - PatientScheduleOS/Real

## 🛠️ Desarrollo

### Prerrequisitos
- Node.js 18+
- npm

### Instalación
```bash
# Clonar repositorio
git clone <repository-url>
cd despertares

# Instalar dependencias
npm install

# Configurar variables de entorno
cp apps/backend/.env.example apps/backend/.env
cp apps/frontend/.env.example apps/frontend/.env
```

### Desarrollo Local
```bash
# Iniciar backend
cd apps/backend
npx prisma generate
npx prisma db push
npm run start:dev

# Iniciar frontend (nueva terminal)
cd apps/frontend
npm run dev
```

Acceder a:
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001
- API Docs: http://localhost:3001/api

## 📊 Modelo de Datos

### Entidades Principales
- **Patient** - Pacientes con datos personales y cobertura médica
- **Professional** - Profesionales con especialidades y disponibilidad
- **Therapy** - Tipos de terapia (psicología, fonoaudiología, etc.)
- **User** - Usuarios del sistema con roles (ADMIN, COORDINATOR, PROFESSIONAL, ASSISTANT)

### Entidades de Relación
- **PatientTherapy** - Asignación de terapias a pacientes
- **DailyRecord** - Registros diarios de asistencia
- **AuthorizationOS** - Autorizaciones de obra social
- **Report** - Informes de profesionales

## 🔐 Autenticación y Roles

### Roles de Usuario
- **ADMIN** - Acceso completo al sistema
- **COORDINATOR** - Gestión de pacientes y profesionales
- **PROFESSIONAL** - Gestión de sus pacientes y reportes
- **ASSISTANT** - Solo visualización

## 🚀 Deploy

### Producción
```bash
# Backend
cd apps/backend
npm run build
npm run start:prod

# Frontend
cd apps/frontend
npm run build
npm run start
```

### Docker
```bash
docker-compose up -d
```

### Vercel + Railway
1. Subir código a GitHub
2. Conectar frontend a Vercel
3. Conectar backend a Railway
4. Configurar variables de entorno

## 📝 Variables de Entorno

Ver [`.env.README.md`](./.env.README.md) para configuración detallada.

## 🤝 Contribuir

1. Fork del repositorio
2. Crear feature branch
3. Commits descriptivos
4. Pull Request

## 📄 Licencia

MIT License - ver archivo [LICENSE](LICENSE) para detalles.

---

**Despertares** - Software para gestión terapéutica infantil 🌟
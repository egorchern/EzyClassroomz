# EzyClassroomz.Library - Database Setup

## Overview
This library contains the Entity Framework Core data layer for EzyClassroomz, configured to use PostgreSQL.

## Database Configuration

## Migrations

### Initial Migration
The initial migration has been created and includes:
- `Users` table with Id, Name, and Email columns
- Unique index on Email column
- Auto-incrementing Id using PostgreSQL identity column

### Applying Migrations to Database
To apply the migration to your PostgreSQL database:

```powershell
cd EzyClassroomz.Library
dotnet ef database update
```

### Creating New Migrations
When you add or modify entities, create a new migration:

```powershell
dotnet ef migrations add YourMigrationName
```

### Removing the Last Migration
If you need to remove the last unapplied migration:

```powershell
dotnet ef migrations remove
```

## Database Structure

### Current Entities

#### User
- `Id` (bigint, primary key, auto-increment)
- `Name` (varchar(100), required)
- `Email` (varchar(255), required, unique)

## Prerequisites

1. PostgreSQL server installed and running
2. Database created (or it will be created on first migration)
3. .NET 9.0 SDK installed
4. EF Core tools installed (already done globally)

## Usage in Applications

To use this DbContext in your application (e.g., in the API project):

1. Add a project reference to EzyClassroomz.Library
2. In `Program.cs` or startup configuration:

```csharp
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));
```

3. Add the connection string to your `appsettings.json`:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Host=localhost;Port=5432;Database=ezyclassroomz;Username=postgres;Password=postgres"
  }
}
```

using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore;
using P01_HospitalDatabase.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace P01_HospitalDatabase.Data
{
    public class HospitalContext : DbContext
    {
        public HospitalContext()
        {

        }
        public HospitalContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Patient> Patients{ get; set;}
        public DbSet<Diagnose> Diagnoses { get; set;}
        public DbSet<Medicament> Medicaments { get; set;}
        public DbSet<Visitation> Visitations { get; set;}
        public DbSet<PatientMedicament> PatientMedicaments { get; set;}
        public DbSet<Doctor> Doctors { get; set;}

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(Configurations.connectionString);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Patient>( entity =>
            {
                entity.HasKey(e => e.PatientId);

                //Realtions..
                entity.HasMany(p => p.Visitations)
                    .WithOne(v => v.Patient);

                entity.HasMany(p => p.Diagnoses)
                    .WithOne(d => d.Patient);

                //Constraints..
                entity.Property(e => e.FirstName)
                    .HasMaxLength(50)
                    .IsRequired(true)
                    .IsUnicode();

                entity.Property(e => e.LasttName)
                    .HasMaxLength(50)
                    .IsRequired(true)
                    .IsUnicode();

                entity.Property(e => e.Address)
                    .HasMaxLength(250)
                    .IsUnicode();

                entity.Property(e => e.Email)
                    .HasMaxLength(80)
                    .IsUnicode(false);

            });

            modelBuilder.Entity<Visitation>(entity =>
            {
                entity.HasKey(e => e.VisitationId);

                entity.Property(e => e.Comments)
                    .HasMaxLength(250)
                    .IsUnicode();
            });

            modelBuilder.Entity<Diagnose>(entity =>
            {
                entity.HasKey(e => e.DiagnoseID);

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .IsUnicode();

                entity.Property(e => e.Comments)
                    .HasMaxLength(250)
                    .IsUnicode();
            });

            modelBuilder.Entity<Medicament>(entity =>
            {
                entity.HasKey(e => e.MedicamentId);

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .IsRequired()
                    .IsUnicode();
            });

            modelBuilder.Entity<PatientMedicament>(entity =>
            {
                entity.HasKey(pm => new { pm.PatientId, pm.MedicamentId });

                entity.HasOne(pm => pm.Patient)
                .WithMany(p => p.Prescriptions)
                .HasForeignKey(pm => pm.PatientId);

                entity.HasOne(pm => pm.Medicament)
                .WithMany(p => p.Prescriptions)
                .HasForeignKey(pm => pm.MedicamentId);
            });

            modelBuilder.Entity<Doctor>(entity =>
            {
                entity.HasKey(e => e.DoctorId);

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .IsRequired()
                    .IsUnicode();

                entity.Property(e => e.Speciality)
                    .HasMaxLength(100)
                    .IsRequired()
                    .IsUnicode();

                entity.HasMany(e => e.Visitations)
                    .WithOne(d => d.Doctor);
            });
        }
    }
}

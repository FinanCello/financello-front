import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AchievementService } from '../../services/Achievement.service';
import { AchievementDTO } from '../../models/AchievementDTO';
import { UserAchievementDTO } from '../../models/UserAchievementDTO';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {
  achievements: AchievementDTO[] = [];
  userAchievements: UserAchievementDTO[] = [];

  userId: number = 1; // Simula el ID del usuario logueado

  modalAbierto = false;

  popLogroId: number | null = null;
  showConfetti = false;
  confettiArray: any[] = [];

  todosLogros = [
    { id: 1, nombre: 'Primer Ahorro', descripcion: 'Completaste tu primer objetivo de ahorro', icono: '🥇', desbloqueado: true },
    { id: 2, nombre: 'Ahorrador Inicial', descripcion: 'Contribuiste por primera vez', icono: '💰', desbloqueado: false },
    { id: 3, nombre: 'Constancia 5', descripcion: 'Contribuiste 5 veces', icono: '🔁', desbloqueado: false },
    { id: 4, nombre: 'Meta Doble', descripcion: 'Completaste 2 metas', icono: '🏆', desbloqueado: true },
    { id: 5, nombre: 'Ahorro de 100', descripcion: 'Ahorraste 100 soles en total', icono: '💸', desbloqueado: false },
    { id: 6, nombre: 'Ahorro de 500', descripcion: 'Ahorraste 500 soles en total', icono: '🤑', desbloqueado: false },
    { id: 7, nombre: 'Meta Triple', descripcion: 'Completaste 3 metas', icono: '🥉', desbloqueado: false },
    { id: 8, nombre: 'Racha de 7 días', descripcion: 'Contribuiste 7 días seguidos', icono: '🔥', desbloqueado: false },
    { id: 9, nombre: 'Super Ahorro', descripcion: 'Ahorraste más de 1000 soles', icono: '🚀', desbloqueado: false },
    { id: 10, nombre: 'Veterano', descripcion: '10 metas completadas', icono: '🎖', desbloqueado: false }
  ];

  constructor(private achievementService: AchievementService) {}

  ngOnInit(): void {
    this.loadAchievements();
    this.loadUserAchievements();
  }

  loadAchievements(): void {
    this.achievementService.getAllAchievements().subscribe({
      next: (data) => {
        this.achievements = data;
      },
      error: (error) => {
        console.error('Error loading achievements:', error);
      }
    });
  }

  loadUserAchievements(): void {
    this.achievementService.getUserAchievements(this.userId).subscribe({
      next: (data) => {
        this.userAchievements = data;
      },
      error: (error) => {
        console.error('Error loading user achievements:', error);
      }
    });
  }

  checkAchievements(): void {
    this.achievementService.checkAchievements(this.userId).subscribe({
      next: () => {
        console.log('Logros verificados.');
        this.loadUserAchievements(); // Recargar logros desbloqueados
      },
      error: (error) => {
        console.error('Error verificando logros:', error);
      }
    });
  }

  abrirModal() {
    this.modalAbierto = true;
  }

  cerrarModal() {
    this.modalAbierto = false;
  }

  lanzarConfeti() {
    this.confettiArray = Array.from({length: 20}).map(() => ({
      left: Math.random() * 90 + '%',
      background: `hsl(${Math.random()*360}, 80%, 60%)`,
      animationDelay: (Math.random() * 0.5) + 's'
    }));
    this.showConfetti = true;
    setTimeout(() => this.showConfetti = false, 1300);
  }

  desbloquearLogro(id: number) {
    const logro = this.todosLogros.find(l => l.id === id);
    if (logro && !logro.desbloqueado) {
      logro.desbloqueado = true;
      this.popLogroId = id;
      this.lanzarConfeti();
      setTimeout(() => this.popLogroId = null, 600);
    }
  }
}

export type TaskStatus = "pendente" | "em andamento" | "concluida";

export interface Task {
  id: number;
  titulo: string;
  descricao?: string;
  status: TaskStatus;
  data_criacao: string;
}

export interface TaskCreate {
  titulo: string;
  descricao?: string;
}

export interface TaskUpdate {
  titulo?: string;
  descricao?: string;
  status?: TaskStatus;
}

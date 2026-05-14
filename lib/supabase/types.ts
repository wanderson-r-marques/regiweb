export type Database = {
  public: {
    Tables: {
      clientes: {
        Row: {
          id: string
          nome: string
          cpf_cnpj: string | null
          email: string | null
          telefone: string | null
          endereco: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          nome: string
          cpf_cnpj?: string | null
          email?: string | null
          telefone?: string | null
          endereco?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          nome?: string
          cpf_cnpj?: string | null
          email?: string | null
          telefone?: string | null
          endereco?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      marcas: {
        Row: {
          id: string
          cliente_id: string
          nome: string
          classe_ncm: string | null
          numero_inpi: string | null
          status: string
          data_registro: string | null
          descricao: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          cliente_id: string
          nome: string
          classe_ncm?: string | null
          numero_inpi?: string | null
          status?: string
          data_registro?: string | null
          descricao?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          cliente_id?: string
          nome?: string
          classe_ncm?: string | null
          numero_inpi?: string | null
          status?: string
          data_registro?: string | null
          descricao?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      perfis: {
        Row: {
          id: string
          email: string
          role: string
          created_at: string
        }
        Insert: {
          id: string
          email: string
          role?: string
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          role?: string
          created_at?: string
        }
      }
    }
  }
}

export type Cliente = Database['public']['Tables']['clientes']['Row']
export type Marca = Database['public']['Tables']['marcas']['Row']
export type Perfil = Database['public']['Tables']['perfis']['Row']

export const STATUS_MARCA = {
  PENDENTE: 'pendente',
  EM_ANALISE: 'em_analise',
  DEFERIDO: 'deferido',
  INDEFERIDO: 'indeferido',
  REGISTRADO: 'registrado',
} as const

export type StatusMarca = typeof STATUS_MARCA[keyof typeof STATUS_MARCA]

export const STATUS_LABELS: Record<StatusMarca, string> = {
  pendente: 'Pendente',
  em_analise: 'Em Análise',
  deferido: 'Deferido',
  indeferido: 'Indeferido',
  registrado: 'Registrado',
}

export const STATUS_COLORS: Record<StatusMarca, string> = {
  pendente: 'bg-yellow-500/20 text-yellow-400',
  em_analise: 'bg-blue-500/20 text-blue-400',
  deferido: 'bg-green-500/20 text-green-400',
  indeferido: 'bg-red-500/20 text-red-400',
  registrado: 'bg-emerald-500/20 text-emerald-400',
}
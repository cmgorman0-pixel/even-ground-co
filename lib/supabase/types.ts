// Hand-written to match client_portal_schema.sql. Regenerate with
// `supabase gen types typescript` once a real project exists.
export type Database = {
  public: {
    Tables: {
      clients: {
        Row: {
          id: string;
          user_id: string | null;
          contact_email: string;
          business_name: string;
          tier: string | null;
          status: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id?: string | null;
          contact_email: string;
          business_name: string;
          tier?: string | null;
          status?: string;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["clients"]["Insert"]>;
        Relationships: [];
      };
      client_sites: {
        Row: {
          id: string;
          client_id: string;
          label: string;
          domain: string;
          gbp_location_name: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          client_id: string;
          label: string;
          domain: string;
          gbp_location_name?: string | null;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["client_sites"]["Insert"]>;
        Relationships: [
          {
            foreignKeyName: "client_sites_client_id_fkey";
            columns: ["client_id"];
            isOneToOne: false;
            referencedRelation: "clients";
            referencedColumns: ["id"];
          }
        ];
      };
      oauth_connections: {
        Row: {
          id: string;
          client_site_id: string;
          provider: string;
          access_token: string | null;
          refresh_token: string | null;
          scopes: string | null;
          expires_at: string | null;
          status: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          client_site_id: string;
          provider?: string;
          access_token?: string | null;
          refresh_token?: string | null;
          scopes?: string | null;
          expires_at?: string | null;
          status?: string;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["oauth_connections"]["Insert"]>;
        Relationships: [
          {
            foreignKeyName: "oauth_connections_client_site_id_fkey";
            columns: ["client_site_id"];
            isOneToOne: false;
            referencedRelation: "client_sites";
            referencedColumns: ["id"];
          }
        ];
      };
      stat_snapshots: {
        Row: {
          id: string;
          client_site_id: string;
          category: "search_console" | "ga4" | "gbp";
          period_start: string;
          period_end: string;
          payload: Record<string, unknown>;
          synced_at: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          client_site_id: string;
          category: "search_console" | "ga4" | "gbp";
          period_start: string;
          period_end: string;
          payload: Record<string, unknown>;
          synced_at?: string | null;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["stat_snapshots"]["Insert"]>;
        Relationships: [
          {
            foreignKeyName: "stat_snapshots_client_site_id_fkey";
            columns: ["client_site_id"];
            isOneToOne: false;
            referencedRelation: "client_sites";
            referencedColumns: ["id"];
          }
        ];
      };
      change_requests: {
        Row: {
          id: string;
          client_id: string;
          message: string;
          status: "open" | "in_progress" | "done";
          created_at: string;
        };
        Insert: {
          id?: string;
          client_id: string;
          message: string;
          status?: "open" | "in_progress" | "done";
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["change_requests"]["Insert"]>;
        Relationships: [
          {
            foreignKeyName: "change_requests_client_id_fkey";
            columns: ["client_id"];
            isOneToOne: false;
            referencedRelation: "clients";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
  };
};

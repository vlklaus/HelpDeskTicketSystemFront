export interface TicketModel {
    id:         number;
    user:       string;
    problem:    string;
    resolution: string;
    completed:  boolean;
}

export interface FavoriteModel {
    id:       number;
    ticketId: number;
    userId:   string;
    ticket:   TicketModel;
}


import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Orphanage from './orphanages'

// isso aqui é o modelo da tabela do sqlite em versão javascript
// Entity que faz com que haja o link entre o javascript e o sql
@Entity('images')
export default class Image {
    @PrimaryGeneratedColumn("increment")
    id:number;

    @Column()
    path: string;

    @ManyToOne(() => Orphanage, orphanage => orphanage.images)
    @JoinColumn({ name: 'orphanage_id' }) 
    orphanage: Orphanage;

}
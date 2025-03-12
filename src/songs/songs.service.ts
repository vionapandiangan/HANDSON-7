import { Injectable } from '@nestjs/common';
import { Song } from './songs.entity';
import { CreateSongDto } from './create-song.dto';

@Injectable()
export class SongsService {
    private currentId: number =  0;
    private songs: Song[] = [];

    findAll(): Song[] {
        return this.songs;
    }
    findOne(id: number): Song {
        const song = this.songs.find((song) => song.id === id);
        if (!song) {
            throw new Error(`Song with id ${id} not found`);
        }
        return song;
    }
    delete(id: number) {
        this.songs = this.songs.filter((song) => song.id != id);
    }
    create(createSongDto: CreateSongDto) {
        const song: Song = {
            id: this.currentId,
            title: createSongDto.title,
            artist: createSongDto.artist,
        };
        ++this.currentId;
        this.songs.push(song);
    }
    updateOne(id: number, createSongDto: CreateSongDto) {
        this.songs.forEach((song) => {
            if (song.id === id) {
             song.artist = createSongDto.artist;
             song.title = createSongDto.title;
        }
      });
    }

}

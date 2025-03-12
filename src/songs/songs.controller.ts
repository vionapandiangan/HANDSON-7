import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { SongsService } from './songs.service';
import { Put, Delete } from '@nestjs/common';
import { CreateSongDto } from './create-song.dto';



@Controller('songs')
export class SongsController {
    constructor(private readonly songService: SongsService) { }

    @Get()
    findAll() {
        return this.songService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
            return this.songService.findOne(id);
        }

        @Put(':id')
        update(@Param('id') id: number,@Body()createSongDto: CreateSongDto) {
                return this.songService.updateOne(id, createSongDto);
            }

            @Delete(':id')
            delete (@Param('id') id: number) {
                    return this.songService.delete(id);
                }
                @Post()
                create(@Body() createSongDto: CreateSongDto) {
                    return this.songService.create(createSongDto);
                }
            }
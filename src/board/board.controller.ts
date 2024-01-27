import { Controller, Post, Body, Res, Response } from '@nestjs/common';
import { BoardReqDto } from 'src/Dto/BoardReq.dto';
import { BoardResDto } from 'src/Dto/BoardRes.dto';
import { BoardService } from './board.service';

@Controller('board')
export class BoardController {
  constructor(private readonly boardservice : BoardService) {}

  @Post()
  async create(@Body() controllerboard : BoardReqDto, @Res() res : Response ) {
    const result = await this.boardservice.create(controllerboard);
    return res.status(result).json();
  }
}

import { Injectable } from '@nestjs/common';
import { BoardReqDto } from 'src/Dto/BoardReq.dto';
import { BoardResDto } from 'src/Dto/BoardRes.dto';

@Injectable()
export class BoardService {
  async create(_boardcontroller : BoardReqDto) {
    const service = new BoardResDto

  } 
}

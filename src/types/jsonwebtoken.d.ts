import { VerifyOptions, Secret, SignOptions } from 'jsonwebtoken';

declare module 'jsonwebtoken' {
  export function verifyAsync(
    token: string,
    secretOrPublicKey: string | Buffer,
    options?: VerifyOptions,
  ): Promise<object | string>;
  export function signAsync(
    payload: string | Buffer | object,
    secretOrPrivateKey: Secret,
    options?: SignOptions,
  ): string;
}

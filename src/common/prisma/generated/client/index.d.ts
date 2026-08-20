
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Comments
 * 
 */
export type Comments = $Result.DefaultSelection<Prisma.$CommentsPayload>
/**
 * Model Images
 * 
 */
export type Images = $Result.DefaultSelection<Prisma.$ImagesPayload>
/**
 * Model SavedImages
 * 
 */
export type SavedImages = $Result.DefaultSelection<Prisma.$SavedImagesPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Comments
 * const comments = await prisma.comments.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Comments
   * const comments = await prisma.comments.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.comments`: Exposes CRUD operations for the **Comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.CommentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.images`: Exposes CRUD operations for the **Images** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.images.findMany()
    * ```
    */
  get images(): Prisma.ImagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.savedImages`: Exposes CRUD operations for the **SavedImages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedImages
    * const savedImages = await prisma.savedImages.findMany()
    * ```
    */
  get savedImages(): Prisma.SavedImagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Comments: 'Comments',
    Images: 'Images',
    SavedImages: 'SavedImages',
    Users: 'Users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "comments" | "images" | "savedImages" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Comments: {
        payload: Prisma.$CommentsPayload<ExtArgs>
        fields: Prisma.CommentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findFirst: {
            args: Prisma.CommentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findMany: {
            args: Prisma.CommentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          create: {
            args: Prisma.CommentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          createMany: {
            args: Prisma.CommentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CommentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          update: {
            args: Prisma.CommentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          deleteMany: {
            args: Prisma.CommentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.CommentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentsCountArgs<ExtArgs>
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
          }
        }
      }
      Images: {
        payload: Prisma.$ImagesPayload<ExtArgs>
        fields: Prisma.ImagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          findFirst: {
            args: Prisma.ImagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          findMany: {
            args: Prisma.ImagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>[]
          }
          create: {
            args: Prisma.ImagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          createMany: {
            args: Prisma.ImagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ImagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          update: {
            args: Prisma.ImagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          deleteMany: {
            args: Prisma.ImagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ImagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          aggregate: {
            args: Prisma.ImagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImages>
          }
          groupBy: {
            args: Prisma.ImagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImagesCountArgs<ExtArgs>
            result: $Utils.Optional<ImagesCountAggregateOutputType> | number
          }
        }
      }
      SavedImages: {
        payload: Prisma.$SavedImagesPayload<ExtArgs>
        fields: Prisma.SavedImagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavedImagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedImagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavedImagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedImagesPayload>
          }
          findFirst: {
            args: Prisma.SavedImagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedImagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavedImagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedImagesPayload>
          }
          findMany: {
            args: Prisma.SavedImagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedImagesPayload>[]
          }
          create: {
            args: Prisma.SavedImagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedImagesPayload>
          }
          createMany: {
            args: Prisma.SavedImagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SavedImagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedImagesPayload>
          }
          update: {
            args: Prisma.SavedImagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedImagesPayload>
          }
          deleteMany: {
            args: Prisma.SavedImagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavedImagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SavedImagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedImagesPayload>
          }
          aggregate: {
            args: Prisma.SavedImagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavedImages>
          }
          groupBy: {
            args: Prisma.SavedImagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavedImagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavedImagesCountArgs<ExtArgs>
            result: $Utils.Optional<SavedImagesCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    comments?: CommentsOmit
    images?: ImagesOmit
    savedImages?: SavedImagesOmit
    users?: UsersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ImagesCountOutputType
   */

  export type ImagesCountOutputType = {
    Comments: number
    SavedImages: number
  }

  export type ImagesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Comments?: boolean | ImagesCountOutputTypeCountCommentsArgs
    SavedImages?: boolean | ImagesCountOutputTypeCountSavedImagesArgs
  }

  // Custom InputTypes
  /**
   * ImagesCountOutputType without action
   */
  export type ImagesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagesCountOutputType
     */
    select?: ImagesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ImagesCountOutputType without action
   */
  export type ImagesCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }

  /**
   * ImagesCountOutputType without action
   */
  export type ImagesCountOutputTypeCountSavedImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedImagesWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    Comments: number
    Images: number
    SavedImages: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Comments?: boolean | UsersCountOutputTypeCountCommentsArgs
    Images?: boolean | UsersCountOutputTypeCountImagesArgs
    SavedImages?: boolean | UsersCountOutputTypeCountSavedImagesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImagesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSavedImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedImagesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    imageId: number | null
  }

  export type CommentsSumAggregateOutputType = {
    id: number | null
    userId: number | null
    imageId: number | null
  }

  export type CommentsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    imageId: number | null
    commentDate: Date | null
    content: string | null
  }

  export type CommentsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    imageId: number | null
    commentDate: Date | null
    content: string | null
  }

  export type CommentsCountAggregateOutputType = {
    id: number
    userId: number
    imageId: number
    commentDate: number
    content: number
    _all: number
  }


  export type CommentsAvgAggregateInputType = {
    id?: true
    userId?: true
    imageId?: true
  }

  export type CommentsSumAggregateInputType = {
    id?: true
    userId?: true
    imageId?: true
  }

  export type CommentsMinAggregateInputType = {
    id?: true
    userId?: true
    imageId?: true
    commentDate?: true
    content?: true
  }

  export type CommentsMaxAggregateInputType = {
    id?: true
    userId?: true
    imageId?: true
    commentDate?: true
    content?: true
  }

  export type CommentsCountAggregateInputType = {
    id?: true
    userId?: true
    imageId?: true
    commentDate?: true
    content?: true
    _all?: true
  }

  export type CommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to aggregate.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type CommentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithAggregationInput | CommentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: CommentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _avg?: CommentsAvgAggregateInputType
    _sum?: CommentsSumAggregateInputType
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    id: number
    userId: number | null
    imageId: number | null
    commentDate: Date | null
    content: string
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends CommentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type CommentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    imageId?: boolean
    commentDate?: boolean
    content?: boolean
    Users?: boolean | Comments$UsersArgs<ExtArgs>
    Images?: boolean | Comments$ImagesArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>



  export type CommentsSelectScalar = {
    id?: boolean
    userId?: boolean
    imageId?: boolean
    commentDate?: boolean
    content?: boolean
  }

  export type CommentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "imageId" | "commentDate" | "content", ExtArgs["result"]["comments"]>
  export type CommentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | Comments$UsersArgs<ExtArgs>
    Images?: boolean | Comments$ImagesArgs<ExtArgs>
  }

  export type $CommentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comments"
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs> | null
      Images: Prisma.$ImagesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      imageId: number | null
      commentDate: Date | null
      content: string
    }, ExtArgs["result"]["comments"]>
    composites: {}
  }

  type CommentsGetPayload<S extends boolean | null | undefined | CommentsDefaultArgs> = $Result.GetResult<Prisma.$CommentsPayload, S>

  type CommentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface CommentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comments'], meta: { name: 'Comments' } }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {CommentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentsFindUniqueArgs>(args: SelectSubset<T, CommentsFindUniqueArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentsFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentsFindFirstArgs>(args?: SelectSubset<T, CommentsFindFirstArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentsFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentsWithIdOnly = await prisma.comments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentsFindManyArgs>(args?: SelectSubset<T, CommentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comments.
     * @param {CommentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
     */
    create<T extends CommentsCreateArgs>(args: SelectSubset<T, CommentsCreateArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentsCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentsCreateManyArgs>(args?: SelectSubset<T, CommentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comments.
     * @param {CommentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
     */
    delete<T extends CommentsDeleteArgs>(args: SelectSubset<T, CommentsDeleteArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comments.
     * @param {CommentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentsUpdateArgs>(args: SelectSubset<T, CommentsUpdateArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentsDeleteManyArgs>(args?: SelectSubset<T, CommentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentsUpdateManyArgs>(args: SelectSubset<T, CommentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comments.
     * @param {CommentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
     */
    upsert<T extends CommentsUpsertArgs>(args: SelectSubset<T, CommentsUpsertArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentsCountArgs>(
      args?: Subset<T, CommentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentsGroupByArgs['orderBy'] }
        : { orderBy?: CommentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comments model
   */
  readonly fields: CommentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends Comments$UsersArgs<ExtArgs> = {}>(args?: Subset<T, Comments$UsersArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Images<T extends Comments$ImagesArgs<ExtArgs> = {}>(args?: Subset<T, Comments$ImagesArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comments model
   */
  interface CommentsFieldRefs {
    readonly id: FieldRef<"Comments", 'Int'>
    readonly userId: FieldRef<"Comments", 'Int'>
    readonly imageId: FieldRef<"Comments", 'Int'>
    readonly commentDate: FieldRef<"Comments", 'DateTime'>
    readonly content: FieldRef<"Comments", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Comments findUnique
   */
  export type CommentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments findUniqueOrThrow
   */
  export type CommentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments findFirst
   */
  export type CommentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments findFirstOrThrow
   */
  export type CommentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments findMany
   */
  export type CommentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments create
   */
  export type CommentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Comments.
     */
    data: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
  }

  /**
   * Comments createMany
   */
  export type CommentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentsCreateManyInput | CommentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comments update
   */
  export type CommentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Comments.
     */
    data: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
    /**
     * Choose, which Comments to update.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments updateMany
   */
  export type CommentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comments upsert
   */
  export type CommentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Comments to update in case it exists.
     */
    where: CommentsWhereUniqueInput
    /**
     * In case the Comments found by the `where` argument doesn't exist, create a new Comments with this data.
     */
    create: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
    /**
     * In case the Comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
  }

  /**
   * Comments delete
   */
  export type CommentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter which Comments to delete.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments deleteMany
   */
  export type CommentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comments.Users
   */
  export type Comments$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * Comments.Images
   */
  export type Comments$ImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    where?: ImagesWhereInput
  }

  /**
   * Comments without action
   */
  export type CommentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
  }


  /**
   * Model Images
   */

  export type AggregateImages = {
    _count: ImagesCountAggregateOutputType | null
    _avg: ImagesAvgAggregateOutputType | null
    _sum: ImagesSumAggregateOutputType | null
    _min: ImagesMinAggregateOutputType | null
    _max: ImagesMaxAggregateOutputType | null
  }

  export type ImagesAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ImagesSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ImagesMinAggregateOutputType = {
    id: number | null
    title: string | null
    url: string | null
    description: string | null
    userId: number | null
  }

  export type ImagesMaxAggregateOutputType = {
    id: number | null
    title: string | null
    url: string | null
    description: string | null
    userId: number | null
  }

  export type ImagesCountAggregateOutputType = {
    id: number
    title: number
    url: number
    description: number
    userId: number
    _all: number
  }


  export type ImagesAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ImagesSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ImagesMinAggregateInputType = {
    id?: true
    title?: true
    url?: true
    description?: true
    userId?: true
  }

  export type ImagesMaxAggregateInputType = {
    id?: true
    title?: true
    url?: true
    description?: true
    userId?: true
  }

  export type ImagesCountAggregateInputType = {
    id?: true
    title?: true
    url?: true
    description?: true
    userId?: true
    _all?: true
  }

  export type ImagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to aggregate.
     */
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImagesMaxAggregateInputType
  }

  export type GetImagesAggregateType<T extends ImagesAggregateArgs> = {
        [P in keyof T & keyof AggregateImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImages[P]>
      : GetScalarType<T[P], AggregateImages[P]>
  }




  export type ImagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImagesWhereInput
    orderBy?: ImagesOrderByWithAggregationInput | ImagesOrderByWithAggregationInput[]
    by: ImagesScalarFieldEnum[] | ImagesScalarFieldEnum
    having?: ImagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImagesCountAggregateInputType | true
    _avg?: ImagesAvgAggregateInputType
    _sum?: ImagesSumAggregateInputType
    _min?: ImagesMinAggregateInputType
    _max?: ImagesMaxAggregateInputType
  }

  export type ImagesGroupByOutputType = {
    id: number
    title: string
    url: string
    description: string | null
    userId: number | null
    _count: ImagesCountAggregateOutputType | null
    _avg: ImagesAvgAggregateOutputType | null
    _sum: ImagesSumAggregateOutputType | null
    _min: ImagesMinAggregateOutputType | null
    _max: ImagesMaxAggregateOutputType | null
  }

  type GetImagesGroupByPayload<T extends ImagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImagesGroupByOutputType[P]>
            : GetScalarType<T[P], ImagesGroupByOutputType[P]>
        }
      >
    >


  export type ImagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
    description?: boolean
    userId?: boolean
    Comments?: boolean | Images$CommentsArgs<ExtArgs>
    Users?: boolean | Images$UsersArgs<ExtArgs>
    SavedImages?: boolean | Images$SavedImagesArgs<ExtArgs>
    _count?: boolean | ImagesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["images"]>



  export type ImagesSelectScalar = {
    id?: boolean
    title?: boolean
    url?: boolean
    description?: boolean
    userId?: boolean
  }

  export type ImagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "url" | "description" | "userId", ExtArgs["result"]["images"]>
  export type ImagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Comments?: boolean | Images$CommentsArgs<ExtArgs>
    Users?: boolean | Images$UsersArgs<ExtArgs>
    SavedImages?: boolean | Images$SavedImagesArgs<ExtArgs>
    _count?: boolean | ImagesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ImagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Images"
    objects: {
      Comments: Prisma.$CommentsPayload<ExtArgs>[]
      Users: Prisma.$UsersPayload<ExtArgs> | null
      SavedImages: Prisma.$SavedImagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      url: string
      description: string | null
      userId: number | null
    }, ExtArgs["result"]["images"]>
    composites: {}
  }

  type ImagesGetPayload<S extends boolean | null | undefined | ImagesDefaultArgs> = $Result.GetResult<Prisma.$ImagesPayload, S>

  type ImagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImagesCountAggregateInputType | true
    }

  export interface ImagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Images'], meta: { name: 'Images' } }
    /**
     * Find zero or one Images that matches the filter.
     * @param {ImagesFindUniqueArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImagesFindUniqueArgs>(args: SelectSubset<T, ImagesFindUniqueArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Images that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImagesFindUniqueOrThrowArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImagesFindUniqueOrThrowArgs>(args: SelectSubset<T, ImagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesFindFirstArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImagesFindFirstArgs>(args?: SelectSubset<T, ImagesFindFirstArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Images that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesFindFirstOrThrowArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImagesFindFirstOrThrowArgs>(args?: SelectSubset<T, ImagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.images.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.images.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imagesWithIdOnly = await prisma.images.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImagesFindManyArgs>(args?: SelectSubset<T, ImagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Images.
     * @param {ImagesCreateArgs} args - Arguments to create a Images.
     * @example
     * // Create one Images
     * const Images = await prisma.images.create({
     *   data: {
     *     // ... data to create a Images
     *   }
     * })
     * 
     */
    create<T extends ImagesCreateArgs>(args: SelectSubset<T, ImagesCreateArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImagesCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const images = await prisma.images.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImagesCreateManyArgs>(args?: SelectSubset<T, ImagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Images.
     * @param {ImagesDeleteArgs} args - Arguments to delete one Images.
     * @example
     * // Delete one Images
     * const Images = await prisma.images.delete({
     *   where: {
     *     // ... filter to delete one Images
     *   }
     * })
     * 
     */
    delete<T extends ImagesDeleteArgs>(args: SelectSubset<T, ImagesDeleteArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Images.
     * @param {ImagesUpdateArgs} args - Arguments to update one Images.
     * @example
     * // Update one Images
     * const images = await prisma.images.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImagesUpdateArgs>(args: SelectSubset<T, ImagesUpdateArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImagesDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.images.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImagesDeleteManyArgs>(args?: SelectSubset<T, ImagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const images = await prisma.images.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImagesUpdateManyArgs>(args: SelectSubset<T, ImagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Images.
     * @param {ImagesUpsertArgs} args - Arguments to update or create a Images.
     * @example
     * // Update or create a Images
     * const images = await prisma.images.upsert({
     *   create: {
     *     // ... data to create a Images
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Images we want to update
     *   }
     * })
     */
    upsert<T extends ImagesUpsertArgs>(args: SelectSubset<T, ImagesUpsertArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.images.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImagesCountArgs>(
      args?: Subset<T, ImagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImagesAggregateArgs>(args: Subset<T, ImagesAggregateArgs>): Prisma.PrismaPromise<GetImagesAggregateType<T>>

    /**
     * Group by Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImagesGroupByArgs['orderBy'] }
        : { orderBy?: ImagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Images model
   */
  readonly fields: ImagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Images.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Comments<T extends Images$CommentsArgs<ExtArgs> = {}>(args?: Subset<T, Images$CommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Users<T extends Images$UsersArgs<ExtArgs> = {}>(args?: Subset<T, Images$UsersArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    SavedImages<T extends Images$SavedImagesArgs<ExtArgs> = {}>(args?: Subset<T, Images$SavedImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Images model
   */
  interface ImagesFieldRefs {
    readonly id: FieldRef<"Images", 'Int'>
    readonly title: FieldRef<"Images", 'String'>
    readonly url: FieldRef<"Images", 'String'>
    readonly description: FieldRef<"Images", 'String'>
    readonly userId: FieldRef<"Images", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Images findUnique
   */
  export type ImagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where: ImagesWhereUniqueInput
  }

  /**
   * Images findUniqueOrThrow
   */
  export type ImagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where: ImagesWhereUniqueInput
  }

  /**
   * Images findFirst
   */
  export type ImagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * Images findFirstOrThrow
   */
  export type ImagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * Images findMany
   */
  export type ImagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * Images create
   */
  export type ImagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * The data needed to create a Images.
     */
    data: XOR<ImagesCreateInput, ImagesUncheckedCreateInput>
  }

  /**
   * Images createMany
   */
  export type ImagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImagesCreateManyInput | ImagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Images update
   */
  export type ImagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * The data needed to update a Images.
     */
    data: XOR<ImagesUpdateInput, ImagesUncheckedUpdateInput>
    /**
     * Choose, which Images to update.
     */
    where: ImagesWhereUniqueInput
  }

  /**
   * Images updateMany
   */
  export type ImagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImagesUpdateManyMutationInput, ImagesUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImagesWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Images upsert
   */
  export type ImagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * The filter to search for the Images to update in case it exists.
     */
    where: ImagesWhereUniqueInput
    /**
     * In case the Images found by the `where` argument doesn't exist, create a new Images with this data.
     */
    create: XOR<ImagesCreateInput, ImagesUncheckedCreateInput>
    /**
     * In case the Images was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImagesUpdateInput, ImagesUncheckedUpdateInput>
  }

  /**
   * Images delete
   */
  export type ImagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter which Images to delete.
     */
    where: ImagesWhereUniqueInput
  }

  /**
   * Images deleteMany
   */
  export type ImagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImagesWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Images.Comments
   */
  export type Images$CommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Images.Users
   */
  export type Images$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * Images.SavedImages
   */
  export type Images$SavedImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedImages
     */
    select?: SavedImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedImages
     */
    omit?: SavedImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedImagesInclude<ExtArgs> | null
    where?: SavedImagesWhereInput
    orderBy?: SavedImagesOrderByWithRelationInput | SavedImagesOrderByWithRelationInput[]
    cursor?: SavedImagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedImagesScalarFieldEnum | SavedImagesScalarFieldEnum[]
  }

  /**
   * Images without action
   */
  export type ImagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
  }


  /**
   * Model SavedImages
   */

  export type AggregateSavedImages = {
    _count: SavedImagesCountAggregateOutputType | null
    _avg: SavedImagesAvgAggregateOutputType | null
    _sum: SavedImagesSumAggregateOutputType | null
    _min: SavedImagesMinAggregateOutputType | null
    _max: SavedImagesMaxAggregateOutputType | null
  }

  export type SavedImagesAvgAggregateOutputType = {
    userId: number | null
    imageId: number | null
  }

  export type SavedImagesSumAggregateOutputType = {
    userId: number | null
    imageId: number | null
  }

  export type SavedImagesMinAggregateOutputType = {
    userId: number | null
    imageId: number | null
    savedDate: Date | null
  }

  export type SavedImagesMaxAggregateOutputType = {
    userId: number | null
    imageId: number | null
    savedDate: Date | null
  }

  export type SavedImagesCountAggregateOutputType = {
    userId: number
    imageId: number
    savedDate: number
    _all: number
  }


  export type SavedImagesAvgAggregateInputType = {
    userId?: true
    imageId?: true
  }

  export type SavedImagesSumAggregateInputType = {
    userId?: true
    imageId?: true
  }

  export type SavedImagesMinAggregateInputType = {
    userId?: true
    imageId?: true
    savedDate?: true
  }

  export type SavedImagesMaxAggregateInputType = {
    userId?: true
    imageId?: true
    savedDate?: true
  }

  export type SavedImagesCountAggregateInputType = {
    userId?: true
    imageId?: true
    savedDate?: true
    _all?: true
  }

  export type SavedImagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedImages to aggregate.
     */
    where?: SavedImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedImages to fetch.
     */
    orderBy?: SavedImagesOrderByWithRelationInput | SavedImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavedImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedImages
    **/
    _count?: true | SavedImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SavedImagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SavedImagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedImagesMaxAggregateInputType
  }

  export type GetSavedImagesAggregateType<T extends SavedImagesAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedImages[P]>
      : GetScalarType<T[P], AggregateSavedImages[P]>
  }




  export type SavedImagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedImagesWhereInput
    orderBy?: SavedImagesOrderByWithAggregationInput | SavedImagesOrderByWithAggregationInput[]
    by: SavedImagesScalarFieldEnum[] | SavedImagesScalarFieldEnum
    having?: SavedImagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedImagesCountAggregateInputType | true
    _avg?: SavedImagesAvgAggregateInputType
    _sum?: SavedImagesSumAggregateInputType
    _min?: SavedImagesMinAggregateInputType
    _max?: SavedImagesMaxAggregateInputType
  }

  export type SavedImagesGroupByOutputType = {
    userId: number
    imageId: number
    savedDate: Date | null
    _count: SavedImagesCountAggregateOutputType | null
    _avg: SavedImagesAvgAggregateOutputType | null
    _sum: SavedImagesSumAggregateOutputType | null
    _min: SavedImagesMinAggregateOutputType | null
    _max: SavedImagesMaxAggregateOutputType | null
  }

  type GetSavedImagesGroupByPayload<T extends SavedImagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavedImagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedImagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedImagesGroupByOutputType[P]>
            : GetScalarType<T[P], SavedImagesGroupByOutputType[P]>
        }
      >
    >


  export type SavedImagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    imageId?: boolean
    savedDate?: boolean
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    Images?: boolean | ImagesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedImages"]>



  export type SavedImagesSelectScalar = {
    userId?: boolean
    imageId?: boolean
    savedDate?: boolean
  }

  export type SavedImagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "imageId" | "savedDate", ExtArgs["result"]["savedImages"]>
  export type SavedImagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    Images?: boolean | ImagesDefaultArgs<ExtArgs>
  }

  export type $SavedImagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavedImages"
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs>
      Images: Prisma.$ImagesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      imageId: number
      savedDate: Date | null
    }, ExtArgs["result"]["savedImages"]>
    composites: {}
  }

  type SavedImagesGetPayload<S extends boolean | null | undefined | SavedImagesDefaultArgs> = $Result.GetResult<Prisma.$SavedImagesPayload, S>

  type SavedImagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SavedImagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SavedImagesCountAggregateInputType | true
    }

  export interface SavedImagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavedImages'], meta: { name: 'SavedImages' } }
    /**
     * Find zero or one SavedImages that matches the filter.
     * @param {SavedImagesFindUniqueArgs} args - Arguments to find a SavedImages
     * @example
     * // Get one SavedImages
     * const savedImages = await prisma.savedImages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavedImagesFindUniqueArgs>(args: SelectSubset<T, SavedImagesFindUniqueArgs<ExtArgs>>): Prisma__SavedImagesClient<$Result.GetResult<Prisma.$SavedImagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SavedImages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavedImagesFindUniqueOrThrowArgs} args - Arguments to find a SavedImages
     * @example
     * // Get one SavedImages
     * const savedImages = await prisma.savedImages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavedImagesFindUniqueOrThrowArgs>(args: SelectSubset<T, SavedImagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavedImagesClient<$Result.GetResult<Prisma.$SavedImagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedImagesFindFirstArgs} args - Arguments to find a SavedImages
     * @example
     * // Get one SavedImages
     * const savedImages = await prisma.savedImages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavedImagesFindFirstArgs>(args?: SelectSubset<T, SavedImagesFindFirstArgs<ExtArgs>>): Prisma__SavedImagesClient<$Result.GetResult<Prisma.$SavedImagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedImages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedImagesFindFirstOrThrowArgs} args - Arguments to find a SavedImages
     * @example
     * // Get one SavedImages
     * const savedImages = await prisma.savedImages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavedImagesFindFirstOrThrowArgs>(args?: SelectSubset<T, SavedImagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavedImagesClient<$Result.GetResult<Prisma.$SavedImagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavedImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedImagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedImages
     * const savedImages = await prisma.savedImages.findMany()
     * 
     * // Get first 10 SavedImages
     * const savedImages = await prisma.savedImages.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const savedImagesWithUserIdOnly = await prisma.savedImages.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends SavedImagesFindManyArgs>(args?: SelectSubset<T, SavedImagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SavedImages.
     * @param {SavedImagesCreateArgs} args - Arguments to create a SavedImages.
     * @example
     * // Create one SavedImages
     * const SavedImages = await prisma.savedImages.create({
     *   data: {
     *     // ... data to create a SavedImages
     *   }
     * })
     * 
     */
    create<T extends SavedImagesCreateArgs>(args: SelectSubset<T, SavedImagesCreateArgs<ExtArgs>>): Prisma__SavedImagesClient<$Result.GetResult<Prisma.$SavedImagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SavedImages.
     * @param {SavedImagesCreateManyArgs} args - Arguments to create many SavedImages.
     * @example
     * // Create many SavedImages
     * const savedImages = await prisma.savedImages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavedImagesCreateManyArgs>(args?: SelectSubset<T, SavedImagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SavedImages.
     * @param {SavedImagesDeleteArgs} args - Arguments to delete one SavedImages.
     * @example
     * // Delete one SavedImages
     * const SavedImages = await prisma.savedImages.delete({
     *   where: {
     *     // ... filter to delete one SavedImages
     *   }
     * })
     * 
     */
    delete<T extends SavedImagesDeleteArgs>(args: SelectSubset<T, SavedImagesDeleteArgs<ExtArgs>>): Prisma__SavedImagesClient<$Result.GetResult<Prisma.$SavedImagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SavedImages.
     * @param {SavedImagesUpdateArgs} args - Arguments to update one SavedImages.
     * @example
     * // Update one SavedImages
     * const savedImages = await prisma.savedImages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavedImagesUpdateArgs>(args: SelectSubset<T, SavedImagesUpdateArgs<ExtArgs>>): Prisma__SavedImagesClient<$Result.GetResult<Prisma.$SavedImagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SavedImages.
     * @param {SavedImagesDeleteManyArgs} args - Arguments to filter SavedImages to delete.
     * @example
     * // Delete a few SavedImages
     * const { count } = await prisma.savedImages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavedImagesDeleteManyArgs>(args?: SelectSubset<T, SavedImagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedImagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedImages
     * const savedImages = await prisma.savedImages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavedImagesUpdateManyArgs>(args: SelectSubset<T, SavedImagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SavedImages.
     * @param {SavedImagesUpsertArgs} args - Arguments to update or create a SavedImages.
     * @example
     * // Update or create a SavedImages
     * const savedImages = await prisma.savedImages.upsert({
     *   create: {
     *     // ... data to create a SavedImages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedImages we want to update
     *   }
     * })
     */
    upsert<T extends SavedImagesUpsertArgs>(args: SelectSubset<T, SavedImagesUpsertArgs<ExtArgs>>): Prisma__SavedImagesClient<$Result.GetResult<Prisma.$SavedImagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SavedImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedImagesCountArgs} args - Arguments to filter SavedImages to count.
     * @example
     * // Count the number of SavedImages
     * const count = await prisma.savedImages.count({
     *   where: {
     *     // ... the filter for the SavedImages we want to count
     *   }
     * })
    **/
    count<T extends SavedImagesCountArgs>(
      args?: Subset<T, SavedImagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SavedImagesAggregateArgs>(args: Subset<T, SavedImagesAggregateArgs>): Prisma.PrismaPromise<GetSavedImagesAggregateType<T>>

    /**
     * Group by SavedImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedImagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SavedImagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedImagesGroupByArgs['orderBy'] }
        : { orderBy?: SavedImagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SavedImagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedImagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavedImages model
   */
  readonly fields: SavedImagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedImages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavedImagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Images<T extends ImagesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ImagesDefaultArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SavedImages model
   */
  interface SavedImagesFieldRefs {
    readonly userId: FieldRef<"SavedImages", 'Int'>
    readonly imageId: FieldRef<"SavedImages", 'Int'>
    readonly savedDate: FieldRef<"SavedImages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SavedImages findUnique
   */
  export type SavedImagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedImages
     */
    select?: SavedImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedImages
     */
    omit?: SavedImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedImagesInclude<ExtArgs> | null
    /**
     * Filter, which SavedImages to fetch.
     */
    where: SavedImagesWhereUniqueInput
  }

  /**
   * SavedImages findUniqueOrThrow
   */
  export type SavedImagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedImages
     */
    select?: SavedImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedImages
     */
    omit?: SavedImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedImagesInclude<ExtArgs> | null
    /**
     * Filter, which SavedImages to fetch.
     */
    where: SavedImagesWhereUniqueInput
  }

  /**
   * SavedImages findFirst
   */
  export type SavedImagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedImages
     */
    select?: SavedImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedImages
     */
    omit?: SavedImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedImagesInclude<ExtArgs> | null
    /**
     * Filter, which SavedImages to fetch.
     */
    where?: SavedImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedImages to fetch.
     */
    orderBy?: SavedImagesOrderByWithRelationInput | SavedImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedImages.
     */
    cursor?: SavedImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedImages.
     */
    distinct?: SavedImagesScalarFieldEnum | SavedImagesScalarFieldEnum[]
  }

  /**
   * SavedImages findFirstOrThrow
   */
  export type SavedImagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedImages
     */
    select?: SavedImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedImages
     */
    omit?: SavedImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedImagesInclude<ExtArgs> | null
    /**
     * Filter, which SavedImages to fetch.
     */
    where?: SavedImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedImages to fetch.
     */
    orderBy?: SavedImagesOrderByWithRelationInput | SavedImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedImages.
     */
    cursor?: SavedImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedImages.
     */
    distinct?: SavedImagesScalarFieldEnum | SavedImagesScalarFieldEnum[]
  }

  /**
   * SavedImages findMany
   */
  export type SavedImagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedImages
     */
    select?: SavedImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedImages
     */
    omit?: SavedImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedImagesInclude<ExtArgs> | null
    /**
     * Filter, which SavedImages to fetch.
     */
    where?: SavedImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedImages to fetch.
     */
    orderBy?: SavedImagesOrderByWithRelationInput | SavedImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedImages.
     */
    cursor?: SavedImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedImages.
     */
    distinct?: SavedImagesScalarFieldEnum | SavedImagesScalarFieldEnum[]
  }

  /**
   * SavedImages create
   */
  export type SavedImagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedImages
     */
    select?: SavedImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedImages
     */
    omit?: SavedImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedImagesInclude<ExtArgs> | null
    /**
     * The data needed to create a SavedImages.
     */
    data: XOR<SavedImagesCreateInput, SavedImagesUncheckedCreateInput>
  }

  /**
   * SavedImages createMany
   */
  export type SavedImagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavedImages.
     */
    data: SavedImagesCreateManyInput | SavedImagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavedImages update
   */
  export type SavedImagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedImages
     */
    select?: SavedImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedImages
     */
    omit?: SavedImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedImagesInclude<ExtArgs> | null
    /**
     * The data needed to update a SavedImages.
     */
    data: XOR<SavedImagesUpdateInput, SavedImagesUncheckedUpdateInput>
    /**
     * Choose, which SavedImages to update.
     */
    where: SavedImagesWhereUniqueInput
  }

  /**
   * SavedImages updateMany
   */
  export type SavedImagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavedImages.
     */
    data: XOR<SavedImagesUpdateManyMutationInput, SavedImagesUncheckedUpdateManyInput>
    /**
     * Filter which SavedImages to update
     */
    where?: SavedImagesWhereInput
    /**
     * Limit how many SavedImages to update.
     */
    limit?: number
  }

  /**
   * SavedImages upsert
   */
  export type SavedImagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedImages
     */
    select?: SavedImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedImages
     */
    omit?: SavedImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedImagesInclude<ExtArgs> | null
    /**
     * The filter to search for the SavedImages to update in case it exists.
     */
    where: SavedImagesWhereUniqueInput
    /**
     * In case the SavedImages found by the `where` argument doesn't exist, create a new SavedImages with this data.
     */
    create: XOR<SavedImagesCreateInput, SavedImagesUncheckedCreateInput>
    /**
     * In case the SavedImages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavedImagesUpdateInput, SavedImagesUncheckedUpdateInput>
  }

  /**
   * SavedImages delete
   */
  export type SavedImagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedImages
     */
    select?: SavedImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedImages
     */
    omit?: SavedImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedImagesInclude<ExtArgs> | null
    /**
     * Filter which SavedImages to delete.
     */
    where: SavedImagesWhereUniqueInput
  }

  /**
   * SavedImages deleteMany
   */
  export type SavedImagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedImages to delete
     */
    where?: SavedImagesWhereInput
    /**
     * Limit how many SavedImages to delete.
     */
    limit?: number
  }

  /**
   * SavedImages without action
   */
  export type SavedImagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedImages
     */
    select?: SavedImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedImages
     */
    omit?: SavedImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedImagesInclude<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    age: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    age: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    fullName: string | null
    age: number | null
    avatar: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    fullName: string | null
    age: number | null
    avatar: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    password: number
    fullName: number
    age: number
    avatar: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    age?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    age?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    fullName?: true
    age?: true
    avatar?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    fullName?: true
    age?: true
    avatar?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    fullName?: true
    age?: true
    avatar?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    email: string
    password: string
    fullName: string
    age: number | null
    avatar: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    fullName?: boolean
    age?: boolean
    avatar?: boolean
    Comments?: boolean | Users$CommentsArgs<ExtArgs>
    Images?: boolean | Users$ImagesArgs<ExtArgs>
    SavedImages?: boolean | Users$SavedImagesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type UsersSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    fullName?: boolean
    age?: boolean
    avatar?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "fullName" | "age" | "avatar", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Comments?: boolean | Users$CommentsArgs<ExtArgs>
    Images?: boolean | Users$ImagesArgs<ExtArgs>
    SavedImages?: boolean | Users$SavedImagesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      Comments: Prisma.$CommentsPayload<ExtArgs>[]
      Images: Prisma.$ImagesPayload<ExtArgs>[]
      SavedImages: Prisma.$SavedImagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      fullName: string
      age: number | null
      avatar: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Comments<T extends Users$CommentsArgs<ExtArgs> = {}>(args?: Subset<T, Users$CommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Images<T extends Users$ImagesArgs<ExtArgs> = {}>(args?: Subset<T, Users$ImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    SavedImages<T extends Users$SavedImagesArgs<ExtArgs> = {}>(args?: Subset<T, Users$SavedImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly fullName: FieldRef<"Users", 'String'>
    readonly age: FieldRef<"Users", 'Int'>
    readonly avatar: FieldRef<"Users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.Comments
   */
  export type Users$CommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Users.Images
   */
  export type Users$ImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    where?: ImagesWhereInput
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    cursor?: ImagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * Users.SavedImages
   */
  export type Users$SavedImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedImages
     */
    select?: SavedImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedImages
     */
    omit?: SavedImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedImagesInclude<ExtArgs> | null
    where?: SavedImagesWhereInput
    orderBy?: SavedImagesOrderByWithRelationInput | SavedImagesOrderByWithRelationInput[]
    cursor?: SavedImagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedImagesScalarFieldEnum | SavedImagesScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CommentsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    imageId: 'imageId',
    commentDate: 'commentDate',
    content: 'content'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const ImagesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    url: 'url',
    description: 'description',
    userId: 'userId'
  };

  export type ImagesScalarFieldEnum = (typeof ImagesScalarFieldEnum)[keyof typeof ImagesScalarFieldEnum]


  export const SavedImagesScalarFieldEnum: {
    userId: 'userId',
    imageId: 'imageId',
    savedDate: 'savedDate'
  };

  export type SavedImagesScalarFieldEnum = (typeof SavedImagesScalarFieldEnum)[keyof typeof SavedImagesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    fullName: 'fullName',
    age: 'age',
    avatar: 'avatar'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const CommentsOrderByRelevanceFieldEnum: {
    content: 'content'
  };

  export type CommentsOrderByRelevanceFieldEnum = (typeof CommentsOrderByRelevanceFieldEnum)[keyof typeof CommentsOrderByRelevanceFieldEnum]


  export const ImagesOrderByRelevanceFieldEnum: {
    title: 'title',
    url: 'url',
    description: 'description'
  };

  export type ImagesOrderByRelevanceFieldEnum = (typeof ImagesOrderByRelevanceFieldEnum)[keyof typeof ImagesOrderByRelevanceFieldEnum]


  export const UsersOrderByRelevanceFieldEnum: {
    email: 'email',
    password: 'password',
    fullName: 'fullName',
    avatar: 'avatar'
  };

  export type UsersOrderByRelevanceFieldEnum = (typeof UsersOrderByRelevanceFieldEnum)[keyof typeof UsersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CommentsWhereInput = {
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    id?: IntFilter<"Comments"> | number
    userId?: IntNullableFilter<"Comments"> | number | null
    imageId?: IntNullableFilter<"Comments"> | number | null
    commentDate?: DateTimeNullableFilter<"Comments"> | Date | string | null
    content?: StringFilter<"Comments"> | string
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    Images?: XOR<ImagesNullableScalarRelationFilter, ImagesWhereInput> | null
  }

  export type CommentsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    imageId?: SortOrderInput | SortOrder
    commentDate?: SortOrderInput | SortOrder
    content?: SortOrder
    Users?: UsersOrderByWithRelationInput
    Images?: ImagesOrderByWithRelationInput
    _relevance?: CommentsOrderByRelevanceInput
  }

  export type CommentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    userId?: IntNullableFilter<"Comments"> | number | null
    imageId?: IntNullableFilter<"Comments"> | number | null
    commentDate?: DateTimeNullableFilter<"Comments"> | Date | string | null
    content?: StringFilter<"Comments"> | string
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    Images?: XOR<ImagesNullableScalarRelationFilter, ImagesWhereInput> | null
  }, "id">

  export type CommentsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    imageId?: SortOrderInput | SortOrder
    commentDate?: SortOrderInput | SortOrder
    content?: SortOrder
    _count?: CommentsCountOrderByAggregateInput
    _avg?: CommentsAvgOrderByAggregateInput
    _max?: CommentsMaxOrderByAggregateInput
    _min?: CommentsMinOrderByAggregateInput
    _sum?: CommentsSumOrderByAggregateInput
  }

  export type CommentsScalarWhereWithAggregatesInput = {
    AND?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    OR?: CommentsScalarWhereWithAggregatesInput[]
    NOT?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comments"> | number
    userId?: IntNullableWithAggregatesFilter<"Comments"> | number | null
    imageId?: IntNullableWithAggregatesFilter<"Comments"> | number | null
    commentDate?: DateTimeNullableWithAggregatesFilter<"Comments"> | Date | string | null
    content?: StringWithAggregatesFilter<"Comments"> | string
  }

  export type ImagesWhereInput = {
    AND?: ImagesWhereInput | ImagesWhereInput[]
    OR?: ImagesWhereInput[]
    NOT?: ImagesWhereInput | ImagesWhereInput[]
    id?: IntFilter<"Images"> | number
    title?: StringFilter<"Images"> | string
    url?: StringFilter<"Images"> | string
    description?: StringNullableFilter<"Images"> | string | null
    userId?: IntNullableFilter<"Images"> | number | null
    Comments?: CommentsListRelationFilter
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    SavedImages?: SavedImagesListRelationFilter
  }

  export type ImagesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    Comments?: CommentsOrderByRelationAggregateInput
    Users?: UsersOrderByWithRelationInput
    SavedImages?: SavedImagesOrderByRelationAggregateInput
    _relevance?: ImagesOrderByRelevanceInput
  }

  export type ImagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImagesWhereInput | ImagesWhereInput[]
    OR?: ImagesWhereInput[]
    NOT?: ImagesWhereInput | ImagesWhereInput[]
    title?: StringFilter<"Images"> | string
    url?: StringFilter<"Images"> | string
    description?: StringNullableFilter<"Images"> | string | null
    userId?: IntNullableFilter<"Images"> | number | null
    Comments?: CommentsListRelationFilter
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    SavedImages?: SavedImagesListRelationFilter
  }, "id">

  export type ImagesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: ImagesCountOrderByAggregateInput
    _avg?: ImagesAvgOrderByAggregateInput
    _max?: ImagesMaxOrderByAggregateInput
    _min?: ImagesMinOrderByAggregateInput
    _sum?: ImagesSumOrderByAggregateInput
  }

  export type ImagesScalarWhereWithAggregatesInput = {
    AND?: ImagesScalarWhereWithAggregatesInput | ImagesScalarWhereWithAggregatesInput[]
    OR?: ImagesScalarWhereWithAggregatesInput[]
    NOT?: ImagesScalarWhereWithAggregatesInput | ImagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Images"> | number
    title?: StringWithAggregatesFilter<"Images"> | string
    url?: StringWithAggregatesFilter<"Images"> | string
    description?: StringNullableWithAggregatesFilter<"Images"> | string | null
    userId?: IntNullableWithAggregatesFilter<"Images"> | number | null
  }

  export type SavedImagesWhereInput = {
    AND?: SavedImagesWhereInput | SavedImagesWhereInput[]
    OR?: SavedImagesWhereInput[]
    NOT?: SavedImagesWhereInput | SavedImagesWhereInput[]
    userId?: IntFilter<"SavedImages"> | number
    imageId?: IntFilter<"SavedImages"> | number
    savedDate?: DateTimeNullableFilter<"SavedImages"> | Date | string | null
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Images?: XOR<ImagesScalarRelationFilter, ImagesWhereInput>
  }

  export type SavedImagesOrderByWithRelationInput = {
    userId?: SortOrder
    imageId?: SortOrder
    savedDate?: SortOrderInput | SortOrder
    Users?: UsersOrderByWithRelationInput
    Images?: ImagesOrderByWithRelationInput
  }

  export type SavedImagesWhereUniqueInput = Prisma.AtLeast<{
    userId_imageId?: SavedImagesUserIdImageIdCompoundUniqueInput
    AND?: SavedImagesWhereInput | SavedImagesWhereInput[]
    OR?: SavedImagesWhereInput[]
    NOT?: SavedImagesWhereInput | SavedImagesWhereInput[]
    userId?: IntFilter<"SavedImages"> | number
    imageId?: IntFilter<"SavedImages"> | number
    savedDate?: DateTimeNullableFilter<"SavedImages"> | Date | string | null
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Images?: XOR<ImagesScalarRelationFilter, ImagesWhereInput>
  }, "userId_imageId">

  export type SavedImagesOrderByWithAggregationInput = {
    userId?: SortOrder
    imageId?: SortOrder
    savedDate?: SortOrderInput | SortOrder
    _count?: SavedImagesCountOrderByAggregateInput
    _avg?: SavedImagesAvgOrderByAggregateInput
    _max?: SavedImagesMaxOrderByAggregateInput
    _min?: SavedImagesMinOrderByAggregateInput
    _sum?: SavedImagesSumOrderByAggregateInput
  }

  export type SavedImagesScalarWhereWithAggregatesInput = {
    AND?: SavedImagesScalarWhereWithAggregatesInput | SavedImagesScalarWhereWithAggregatesInput[]
    OR?: SavedImagesScalarWhereWithAggregatesInput[]
    NOT?: SavedImagesScalarWhereWithAggregatesInput | SavedImagesScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"SavedImages"> | number
    imageId?: IntWithAggregatesFilter<"SavedImages"> | number
    savedDate?: DateTimeNullableWithAggregatesFilter<"SavedImages"> | Date | string | null
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    fullName?: StringFilter<"Users"> | string
    age?: IntNullableFilter<"Users"> | number | null
    avatar?: StringNullableFilter<"Users"> | string | null
    Comments?: CommentsListRelationFilter
    Images?: ImagesListRelationFilter
    SavedImages?: SavedImagesListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    age?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    Comments?: CommentsOrderByRelationAggregateInput
    Images?: ImagesOrderByRelationAggregateInput
    SavedImages?: SavedImagesOrderByRelationAggregateInput
    _relevance?: UsersOrderByRelevanceInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    password?: StringFilter<"Users"> | string
    fullName?: StringFilter<"Users"> | string
    age?: IntNullableFilter<"Users"> | number | null
    avatar?: StringNullableFilter<"Users"> | string | null
    Comments?: CommentsListRelationFilter
    Images?: ImagesListRelationFilter
    SavedImages?: SavedImagesListRelationFilter
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    age?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    fullName?: StringWithAggregatesFilter<"Users"> | string
    age?: IntNullableWithAggregatesFilter<"Users"> | number | null
    avatar?: StringNullableWithAggregatesFilter<"Users"> | string | null
  }

  export type CommentsCreateInput = {
    commentDate?: Date | string | null
    content: string
    Users?: UsersCreateNestedOneWithoutCommentsInput
    Images?: ImagesCreateNestedOneWithoutCommentsInput
  }

  export type CommentsUncheckedCreateInput = {
    id?: number
    userId?: number | null
    imageId?: number | null
    commentDate?: Date | string | null
    content: string
  }

  export type CommentsUpdateInput = {
    commentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    Users?: UsersUpdateOneWithoutCommentsNestedInput
    Images?: ImagesUpdateOneWithoutCommentsNestedInput
  }

  export type CommentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    commentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
  }

  export type CommentsCreateManyInput = {
    id?: number
    userId?: number | null
    imageId?: number | null
    commentDate?: Date | string | null
    content: string
  }

  export type CommentsUpdateManyMutationInput = {
    commentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
  }

  export type CommentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    commentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
  }

  export type ImagesCreateInput = {
    title: string
    url: string
    description?: string | null
    Comments?: CommentsCreateNestedManyWithoutImagesInput
    Users?: UsersCreateNestedOneWithoutImagesInput
    SavedImages?: SavedImagesCreateNestedManyWithoutImagesInput
  }

  export type ImagesUncheckedCreateInput = {
    id?: number
    title: string
    url: string
    description?: string | null
    userId?: number | null
    Comments?: CommentsUncheckedCreateNestedManyWithoutImagesInput
    SavedImages?: SavedImagesUncheckedCreateNestedManyWithoutImagesInput
  }

  export type ImagesUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Comments?: CommentsUpdateManyWithoutImagesNestedInput
    Users?: UsersUpdateOneWithoutImagesNestedInput
    SavedImages?: SavedImagesUpdateManyWithoutImagesNestedInput
  }

  export type ImagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    Comments?: CommentsUncheckedUpdateManyWithoutImagesNestedInput
    SavedImages?: SavedImagesUncheckedUpdateManyWithoutImagesNestedInput
  }

  export type ImagesCreateManyInput = {
    id?: number
    title: string
    url: string
    description?: string | null
    userId?: number | null
  }

  export type ImagesUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SavedImagesCreateInput = {
    savedDate?: Date | string | null
    Users: UsersCreateNestedOneWithoutSavedImagesInput
    Images: ImagesCreateNestedOneWithoutSavedImagesInput
  }

  export type SavedImagesUncheckedCreateInput = {
    userId: number
    imageId: number
    savedDate?: Date | string | null
  }

  export type SavedImagesUpdateInput = {
    savedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Users?: UsersUpdateOneRequiredWithoutSavedImagesNestedInput
    Images?: ImagesUpdateOneRequiredWithoutSavedImagesNestedInput
  }

  export type SavedImagesUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
    savedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SavedImagesCreateManyInput = {
    userId: number
    imageId: number
    savedDate?: Date | string | null
  }

  export type SavedImagesUpdateManyMutationInput = {
    savedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SavedImagesUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
    savedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsersCreateInput = {
    email: string
    password: string
    fullName: string
    age?: number | null
    avatar?: string | null
    Comments?: CommentsCreateNestedManyWithoutUsersInput
    Images?: ImagesCreateNestedManyWithoutUsersInput
    SavedImages?: SavedImagesCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    fullName: string
    age?: number | null
    avatar?: string | null
    Comments?: CommentsUncheckedCreateNestedManyWithoutUsersInput
    Images?: ImagesUncheckedCreateNestedManyWithoutUsersInput
    SavedImages?: SavedImagesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    Comments?: CommentsUpdateManyWithoutUsersNestedInput
    Images?: ImagesUpdateManyWithoutUsersNestedInput
    SavedImages?: SavedImagesUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    Comments?: CommentsUncheckedUpdateManyWithoutUsersNestedInput
    Images?: ImagesUncheckedUpdateManyWithoutUsersNestedInput
    SavedImages?: SavedImagesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    email: string
    password: string
    fullName: string
    age?: number | null
    avatar?: string | null
  }

  export type UsersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UsersNullableScalarRelationFilter = {
    is?: UsersWhereInput | null
    isNot?: UsersWhereInput | null
  }

  export type ImagesNullableScalarRelationFilter = {
    is?: ImagesWhereInput | null
    isNot?: ImagesWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CommentsOrderByRelevanceInput = {
    fields: CommentsOrderByRelevanceFieldEnum | CommentsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CommentsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    imageId?: SortOrder
    commentDate?: SortOrder
    content?: SortOrder
  }

  export type CommentsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    imageId?: SortOrder
  }

  export type CommentsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    imageId?: SortOrder
    commentDate?: SortOrder
    content?: SortOrder
  }

  export type CommentsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    imageId?: SortOrder
    commentDate?: SortOrder
    content?: SortOrder
  }

  export type CommentsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    imageId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CommentsListRelationFilter = {
    every?: CommentsWhereInput
    some?: CommentsWhereInput
    none?: CommentsWhereInput
  }

  export type SavedImagesListRelationFilter = {
    every?: SavedImagesWhereInput
    some?: SavedImagesWhereInput
    none?: SavedImagesWhereInput
  }

  export type CommentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SavedImagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImagesOrderByRelevanceInput = {
    fields: ImagesOrderByRelevanceFieldEnum | ImagesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ImagesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type ImagesAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ImagesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type ImagesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type ImagesSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type ImagesScalarRelationFilter = {
    is?: ImagesWhereInput
    isNot?: ImagesWhereInput
  }

  export type SavedImagesUserIdImageIdCompoundUniqueInput = {
    userId: number
    imageId: number
  }

  export type SavedImagesCountOrderByAggregateInput = {
    userId?: SortOrder
    imageId?: SortOrder
    savedDate?: SortOrder
  }

  export type SavedImagesAvgOrderByAggregateInput = {
    userId?: SortOrder
    imageId?: SortOrder
  }

  export type SavedImagesMaxOrderByAggregateInput = {
    userId?: SortOrder
    imageId?: SortOrder
    savedDate?: SortOrder
  }

  export type SavedImagesMinOrderByAggregateInput = {
    userId?: SortOrder
    imageId?: SortOrder
    savedDate?: SortOrder
  }

  export type SavedImagesSumOrderByAggregateInput = {
    userId?: SortOrder
    imageId?: SortOrder
  }

  export type ImagesListRelationFilter = {
    every?: ImagesWhereInput
    some?: ImagesWhereInput
    none?: ImagesWhereInput
  }

  export type ImagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersOrderByRelevanceInput = {
    fields: UsersOrderByRelevanceFieldEnum | UsersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    age?: SortOrder
    avatar?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    age?: SortOrder
    avatar?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    age?: SortOrder
    avatar?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
  }

  export type UsersCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCommentsInput
    connect?: UsersWhereUniqueInput
  }

  export type ImagesCreateNestedOneWithoutCommentsInput = {
    create?: XOR<ImagesCreateWithoutCommentsInput, ImagesUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ImagesCreateOrConnectWithoutCommentsInput
    connect?: ImagesWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UsersUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCommentsInput
    upsert?: UsersUpsertWithoutCommentsInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutCommentsInput, UsersUpdateWithoutCommentsInput>, UsersUncheckedUpdateWithoutCommentsInput>
  }

  export type ImagesUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<ImagesCreateWithoutCommentsInput, ImagesUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ImagesCreateOrConnectWithoutCommentsInput
    upsert?: ImagesUpsertWithoutCommentsInput
    disconnect?: ImagesWhereInput | boolean
    delete?: ImagesWhereInput | boolean
    connect?: ImagesWhereUniqueInput
    update?: XOR<XOR<ImagesUpdateToOneWithWhereWithoutCommentsInput, ImagesUpdateWithoutCommentsInput>, ImagesUncheckedUpdateWithoutCommentsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CommentsCreateNestedManyWithoutImagesInput = {
    create?: XOR<CommentsCreateWithoutImagesInput, CommentsUncheckedCreateWithoutImagesInput> | CommentsCreateWithoutImagesInput[] | CommentsUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutImagesInput | CommentsCreateOrConnectWithoutImagesInput[]
    createMany?: CommentsCreateManyImagesInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type UsersCreateNestedOneWithoutImagesInput = {
    create?: XOR<UsersCreateWithoutImagesInput, UsersUncheckedCreateWithoutImagesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutImagesInput
    connect?: UsersWhereUniqueInput
  }

  export type SavedImagesCreateNestedManyWithoutImagesInput = {
    create?: XOR<SavedImagesCreateWithoutImagesInput, SavedImagesUncheckedCreateWithoutImagesInput> | SavedImagesCreateWithoutImagesInput[] | SavedImagesUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: SavedImagesCreateOrConnectWithoutImagesInput | SavedImagesCreateOrConnectWithoutImagesInput[]
    createMany?: SavedImagesCreateManyImagesInputEnvelope
    connect?: SavedImagesWhereUniqueInput | SavedImagesWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutImagesInput = {
    create?: XOR<CommentsCreateWithoutImagesInput, CommentsUncheckedCreateWithoutImagesInput> | CommentsCreateWithoutImagesInput[] | CommentsUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutImagesInput | CommentsCreateOrConnectWithoutImagesInput[]
    createMany?: CommentsCreateManyImagesInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type SavedImagesUncheckedCreateNestedManyWithoutImagesInput = {
    create?: XOR<SavedImagesCreateWithoutImagesInput, SavedImagesUncheckedCreateWithoutImagesInput> | SavedImagesCreateWithoutImagesInput[] | SavedImagesUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: SavedImagesCreateOrConnectWithoutImagesInput | SavedImagesCreateOrConnectWithoutImagesInput[]
    createMany?: SavedImagesCreateManyImagesInputEnvelope
    connect?: SavedImagesWhereUniqueInput | SavedImagesWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CommentsUpdateManyWithoutImagesNestedInput = {
    create?: XOR<CommentsCreateWithoutImagesInput, CommentsUncheckedCreateWithoutImagesInput> | CommentsCreateWithoutImagesInput[] | CommentsUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutImagesInput | CommentsCreateOrConnectWithoutImagesInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutImagesInput | CommentsUpsertWithWhereUniqueWithoutImagesInput[]
    createMany?: CommentsCreateManyImagesInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutImagesInput | CommentsUpdateWithWhereUniqueWithoutImagesInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutImagesInput | CommentsUpdateManyWithWhereWithoutImagesInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type UsersUpdateOneWithoutImagesNestedInput = {
    create?: XOR<UsersCreateWithoutImagesInput, UsersUncheckedCreateWithoutImagesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutImagesInput
    upsert?: UsersUpsertWithoutImagesInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutImagesInput, UsersUpdateWithoutImagesInput>, UsersUncheckedUpdateWithoutImagesInput>
  }

  export type SavedImagesUpdateManyWithoutImagesNestedInput = {
    create?: XOR<SavedImagesCreateWithoutImagesInput, SavedImagesUncheckedCreateWithoutImagesInput> | SavedImagesCreateWithoutImagesInput[] | SavedImagesUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: SavedImagesCreateOrConnectWithoutImagesInput | SavedImagesCreateOrConnectWithoutImagesInput[]
    upsert?: SavedImagesUpsertWithWhereUniqueWithoutImagesInput | SavedImagesUpsertWithWhereUniqueWithoutImagesInput[]
    createMany?: SavedImagesCreateManyImagesInputEnvelope
    set?: SavedImagesWhereUniqueInput | SavedImagesWhereUniqueInput[]
    disconnect?: SavedImagesWhereUniqueInput | SavedImagesWhereUniqueInput[]
    delete?: SavedImagesWhereUniqueInput | SavedImagesWhereUniqueInput[]
    connect?: SavedImagesWhereUniqueInput | SavedImagesWhereUniqueInput[]
    update?: SavedImagesUpdateWithWhereUniqueWithoutImagesInput | SavedImagesUpdateWithWhereUniqueWithoutImagesInput[]
    updateMany?: SavedImagesUpdateManyWithWhereWithoutImagesInput | SavedImagesUpdateManyWithWhereWithoutImagesInput[]
    deleteMany?: SavedImagesScalarWhereInput | SavedImagesScalarWhereInput[]
  }

  export type CommentsUncheckedUpdateManyWithoutImagesNestedInput = {
    create?: XOR<CommentsCreateWithoutImagesInput, CommentsUncheckedCreateWithoutImagesInput> | CommentsCreateWithoutImagesInput[] | CommentsUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutImagesInput | CommentsCreateOrConnectWithoutImagesInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutImagesInput | CommentsUpsertWithWhereUniqueWithoutImagesInput[]
    createMany?: CommentsCreateManyImagesInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutImagesInput | CommentsUpdateWithWhereUniqueWithoutImagesInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutImagesInput | CommentsUpdateManyWithWhereWithoutImagesInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type SavedImagesUncheckedUpdateManyWithoutImagesNestedInput = {
    create?: XOR<SavedImagesCreateWithoutImagesInput, SavedImagesUncheckedCreateWithoutImagesInput> | SavedImagesCreateWithoutImagesInput[] | SavedImagesUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: SavedImagesCreateOrConnectWithoutImagesInput | SavedImagesCreateOrConnectWithoutImagesInput[]
    upsert?: SavedImagesUpsertWithWhereUniqueWithoutImagesInput | SavedImagesUpsertWithWhereUniqueWithoutImagesInput[]
    createMany?: SavedImagesCreateManyImagesInputEnvelope
    set?: SavedImagesWhereUniqueInput | SavedImagesWhereUniqueInput[]
    disconnect?: SavedImagesWhereUniqueInput | SavedImagesWhereUniqueInput[]
    delete?: SavedImagesWhereUniqueInput | SavedImagesWhereUniqueInput[]
    connect?: SavedImagesWhereUniqueInput | SavedImagesWhereUniqueInput[]
    update?: SavedImagesUpdateWithWhereUniqueWithoutImagesInput | SavedImagesUpdateWithWhereUniqueWithoutImagesInput[]
    updateMany?: SavedImagesUpdateManyWithWhereWithoutImagesInput | SavedImagesUpdateManyWithWhereWithoutImagesInput[]
    deleteMany?: SavedImagesScalarWhereInput | SavedImagesScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutSavedImagesInput = {
    create?: XOR<UsersCreateWithoutSavedImagesInput, UsersUncheckedCreateWithoutSavedImagesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSavedImagesInput
    connect?: UsersWhereUniqueInput
  }

  export type ImagesCreateNestedOneWithoutSavedImagesInput = {
    create?: XOR<ImagesCreateWithoutSavedImagesInput, ImagesUncheckedCreateWithoutSavedImagesInput>
    connectOrCreate?: ImagesCreateOrConnectWithoutSavedImagesInput
    connect?: ImagesWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutSavedImagesNestedInput = {
    create?: XOR<UsersCreateWithoutSavedImagesInput, UsersUncheckedCreateWithoutSavedImagesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSavedImagesInput
    upsert?: UsersUpsertWithoutSavedImagesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutSavedImagesInput, UsersUpdateWithoutSavedImagesInput>, UsersUncheckedUpdateWithoutSavedImagesInput>
  }

  export type ImagesUpdateOneRequiredWithoutSavedImagesNestedInput = {
    create?: XOR<ImagesCreateWithoutSavedImagesInput, ImagesUncheckedCreateWithoutSavedImagesInput>
    connectOrCreate?: ImagesCreateOrConnectWithoutSavedImagesInput
    upsert?: ImagesUpsertWithoutSavedImagesInput
    connect?: ImagesWhereUniqueInput
    update?: XOR<XOR<ImagesUpdateToOneWithWhereWithoutSavedImagesInput, ImagesUpdateWithoutSavedImagesInput>, ImagesUncheckedUpdateWithoutSavedImagesInput>
  }

  export type CommentsCreateNestedManyWithoutUsersInput = {
    create?: XOR<CommentsCreateWithoutUsersInput, CommentsUncheckedCreateWithoutUsersInput> | CommentsCreateWithoutUsersInput[] | CommentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUsersInput | CommentsCreateOrConnectWithoutUsersInput[]
    createMany?: CommentsCreateManyUsersInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type ImagesCreateNestedManyWithoutUsersInput = {
    create?: XOR<ImagesCreateWithoutUsersInput, ImagesUncheckedCreateWithoutUsersInput> | ImagesCreateWithoutUsersInput[] | ImagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutUsersInput | ImagesCreateOrConnectWithoutUsersInput[]
    createMany?: ImagesCreateManyUsersInputEnvelope
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
  }

  export type SavedImagesCreateNestedManyWithoutUsersInput = {
    create?: XOR<SavedImagesCreateWithoutUsersInput, SavedImagesUncheckedCreateWithoutUsersInput> | SavedImagesCreateWithoutUsersInput[] | SavedImagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: SavedImagesCreateOrConnectWithoutUsersInput | SavedImagesCreateOrConnectWithoutUsersInput[]
    createMany?: SavedImagesCreateManyUsersInputEnvelope
    connect?: SavedImagesWhereUniqueInput | SavedImagesWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<CommentsCreateWithoutUsersInput, CommentsUncheckedCreateWithoutUsersInput> | CommentsCreateWithoutUsersInput[] | CommentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUsersInput | CommentsCreateOrConnectWithoutUsersInput[]
    createMany?: CommentsCreateManyUsersInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type ImagesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<ImagesCreateWithoutUsersInput, ImagesUncheckedCreateWithoutUsersInput> | ImagesCreateWithoutUsersInput[] | ImagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutUsersInput | ImagesCreateOrConnectWithoutUsersInput[]
    createMany?: ImagesCreateManyUsersInputEnvelope
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
  }

  export type SavedImagesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<SavedImagesCreateWithoutUsersInput, SavedImagesUncheckedCreateWithoutUsersInput> | SavedImagesCreateWithoutUsersInput[] | SavedImagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: SavedImagesCreateOrConnectWithoutUsersInput | SavedImagesCreateOrConnectWithoutUsersInput[]
    createMany?: SavedImagesCreateManyUsersInputEnvelope
    connect?: SavedImagesWhereUniqueInput | SavedImagesWhereUniqueInput[]
  }

  export type CommentsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<CommentsCreateWithoutUsersInput, CommentsUncheckedCreateWithoutUsersInput> | CommentsCreateWithoutUsersInput[] | CommentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUsersInput | CommentsCreateOrConnectWithoutUsersInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutUsersInput | CommentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: CommentsCreateManyUsersInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutUsersInput | CommentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutUsersInput | CommentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type ImagesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ImagesCreateWithoutUsersInput, ImagesUncheckedCreateWithoutUsersInput> | ImagesCreateWithoutUsersInput[] | ImagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutUsersInput | ImagesCreateOrConnectWithoutUsersInput[]
    upsert?: ImagesUpsertWithWhereUniqueWithoutUsersInput | ImagesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ImagesCreateManyUsersInputEnvelope
    set?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    disconnect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    delete?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    update?: ImagesUpdateWithWhereUniqueWithoutUsersInput | ImagesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ImagesUpdateManyWithWhereWithoutUsersInput | ImagesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
  }

  export type SavedImagesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<SavedImagesCreateWithoutUsersInput, SavedImagesUncheckedCreateWithoutUsersInput> | SavedImagesCreateWithoutUsersInput[] | SavedImagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: SavedImagesCreateOrConnectWithoutUsersInput | SavedImagesCreateOrConnectWithoutUsersInput[]
    upsert?: SavedImagesUpsertWithWhereUniqueWithoutUsersInput | SavedImagesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: SavedImagesCreateManyUsersInputEnvelope
    set?: SavedImagesWhereUniqueInput | SavedImagesWhereUniqueInput[]
    disconnect?: SavedImagesWhereUniqueInput | SavedImagesWhereUniqueInput[]
    delete?: SavedImagesWhereUniqueInput | SavedImagesWhereUniqueInput[]
    connect?: SavedImagesWhereUniqueInput | SavedImagesWhereUniqueInput[]
    update?: SavedImagesUpdateWithWhereUniqueWithoutUsersInput | SavedImagesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: SavedImagesUpdateManyWithWhereWithoutUsersInput | SavedImagesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: SavedImagesScalarWhereInput | SavedImagesScalarWhereInput[]
  }

  export type CommentsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<CommentsCreateWithoutUsersInput, CommentsUncheckedCreateWithoutUsersInput> | CommentsCreateWithoutUsersInput[] | CommentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUsersInput | CommentsCreateOrConnectWithoutUsersInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutUsersInput | CommentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: CommentsCreateManyUsersInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutUsersInput | CommentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutUsersInput | CommentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type ImagesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ImagesCreateWithoutUsersInput, ImagesUncheckedCreateWithoutUsersInput> | ImagesCreateWithoutUsersInput[] | ImagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutUsersInput | ImagesCreateOrConnectWithoutUsersInput[]
    upsert?: ImagesUpsertWithWhereUniqueWithoutUsersInput | ImagesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ImagesCreateManyUsersInputEnvelope
    set?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    disconnect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    delete?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    update?: ImagesUpdateWithWhereUniqueWithoutUsersInput | ImagesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ImagesUpdateManyWithWhereWithoutUsersInput | ImagesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
  }

  export type SavedImagesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<SavedImagesCreateWithoutUsersInput, SavedImagesUncheckedCreateWithoutUsersInput> | SavedImagesCreateWithoutUsersInput[] | SavedImagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: SavedImagesCreateOrConnectWithoutUsersInput | SavedImagesCreateOrConnectWithoutUsersInput[]
    upsert?: SavedImagesUpsertWithWhereUniqueWithoutUsersInput | SavedImagesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: SavedImagesCreateManyUsersInputEnvelope
    set?: SavedImagesWhereUniqueInput | SavedImagesWhereUniqueInput[]
    disconnect?: SavedImagesWhereUniqueInput | SavedImagesWhereUniqueInput[]
    delete?: SavedImagesWhereUniqueInput | SavedImagesWhereUniqueInput[]
    connect?: SavedImagesWhereUniqueInput | SavedImagesWhereUniqueInput[]
    update?: SavedImagesUpdateWithWhereUniqueWithoutUsersInput | SavedImagesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: SavedImagesUpdateManyWithWhereWithoutUsersInput | SavedImagesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: SavedImagesScalarWhereInput | SavedImagesScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UsersCreateWithoutCommentsInput = {
    email: string
    password: string
    fullName: string
    age?: number | null
    avatar?: string | null
    Images?: ImagesCreateNestedManyWithoutUsersInput
    SavedImages?: SavedImagesCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutCommentsInput = {
    id?: number
    email: string
    password: string
    fullName: string
    age?: number | null
    avatar?: string | null
    Images?: ImagesUncheckedCreateNestedManyWithoutUsersInput
    SavedImages?: SavedImagesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutCommentsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
  }

  export type ImagesCreateWithoutCommentsInput = {
    title: string
    url: string
    description?: string | null
    Users?: UsersCreateNestedOneWithoutImagesInput
    SavedImages?: SavedImagesCreateNestedManyWithoutImagesInput
  }

  export type ImagesUncheckedCreateWithoutCommentsInput = {
    id?: number
    title: string
    url: string
    description?: string | null
    userId?: number | null
    SavedImages?: SavedImagesUncheckedCreateNestedManyWithoutImagesInput
  }

  export type ImagesCreateOrConnectWithoutCommentsInput = {
    where: ImagesWhereUniqueInput
    create: XOR<ImagesCreateWithoutCommentsInput, ImagesUncheckedCreateWithoutCommentsInput>
  }

  export type UsersUpsertWithoutCommentsInput = {
    update: XOR<UsersUpdateWithoutCommentsInput, UsersUncheckedUpdateWithoutCommentsInput>
    create: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutCommentsInput, UsersUncheckedUpdateWithoutCommentsInput>
  }

  export type UsersUpdateWithoutCommentsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    Images?: ImagesUpdateManyWithoutUsersNestedInput
    SavedImages?: SavedImagesUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    Images?: ImagesUncheckedUpdateManyWithoutUsersNestedInput
    SavedImages?: SavedImagesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type ImagesUpsertWithoutCommentsInput = {
    update: XOR<ImagesUpdateWithoutCommentsInput, ImagesUncheckedUpdateWithoutCommentsInput>
    create: XOR<ImagesCreateWithoutCommentsInput, ImagesUncheckedCreateWithoutCommentsInput>
    where?: ImagesWhereInput
  }

  export type ImagesUpdateToOneWithWhereWithoutCommentsInput = {
    where?: ImagesWhereInput
    data: XOR<ImagesUpdateWithoutCommentsInput, ImagesUncheckedUpdateWithoutCommentsInput>
  }

  export type ImagesUpdateWithoutCommentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Users?: UsersUpdateOneWithoutImagesNestedInput
    SavedImages?: SavedImagesUpdateManyWithoutImagesNestedInput
  }

  export type ImagesUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    SavedImages?: SavedImagesUncheckedUpdateManyWithoutImagesNestedInput
  }

  export type CommentsCreateWithoutImagesInput = {
    commentDate?: Date | string | null
    content: string
    Users?: UsersCreateNestedOneWithoutCommentsInput
  }

  export type CommentsUncheckedCreateWithoutImagesInput = {
    id?: number
    userId?: number | null
    commentDate?: Date | string | null
    content: string
  }

  export type CommentsCreateOrConnectWithoutImagesInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutImagesInput, CommentsUncheckedCreateWithoutImagesInput>
  }

  export type CommentsCreateManyImagesInputEnvelope = {
    data: CommentsCreateManyImagesInput | CommentsCreateManyImagesInput[]
    skipDuplicates?: boolean
  }

  export type UsersCreateWithoutImagesInput = {
    email: string
    password: string
    fullName: string
    age?: number | null
    avatar?: string | null
    Comments?: CommentsCreateNestedManyWithoutUsersInput
    SavedImages?: SavedImagesCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutImagesInput = {
    id?: number
    email: string
    password: string
    fullName: string
    age?: number | null
    avatar?: string | null
    Comments?: CommentsUncheckedCreateNestedManyWithoutUsersInput
    SavedImages?: SavedImagesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutImagesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutImagesInput, UsersUncheckedCreateWithoutImagesInput>
  }

  export type SavedImagesCreateWithoutImagesInput = {
    savedDate?: Date | string | null
    Users: UsersCreateNestedOneWithoutSavedImagesInput
  }

  export type SavedImagesUncheckedCreateWithoutImagesInput = {
    userId: number
    savedDate?: Date | string | null
  }

  export type SavedImagesCreateOrConnectWithoutImagesInput = {
    where: SavedImagesWhereUniqueInput
    create: XOR<SavedImagesCreateWithoutImagesInput, SavedImagesUncheckedCreateWithoutImagesInput>
  }

  export type SavedImagesCreateManyImagesInputEnvelope = {
    data: SavedImagesCreateManyImagesInput | SavedImagesCreateManyImagesInput[]
    skipDuplicates?: boolean
  }

  export type CommentsUpsertWithWhereUniqueWithoutImagesInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutImagesInput, CommentsUncheckedUpdateWithoutImagesInput>
    create: XOR<CommentsCreateWithoutImagesInput, CommentsUncheckedCreateWithoutImagesInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutImagesInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutImagesInput, CommentsUncheckedUpdateWithoutImagesInput>
  }

  export type CommentsUpdateManyWithWhereWithoutImagesInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutImagesInput>
  }

  export type CommentsScalarWhereInput = {
    AND?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    OR?: CommentsScalarWhereInput[]
    NOT?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    id?: IntFilter<"Comments"> | number
    userId?: IntNullableFilter<"Comments"> | number | null
    imageId?: IntNullableFilter<"Comments"> | number | null
    commentDate?: DateTimeNullableFilter<"Comments"> | Date | string | null
    content?: StringFilter<"Comments"> | string
  }

  export type UsersUpsertWithoutImagesInput = {
    update: XOR<UsersUpdateWithoutImagesInput, UsersUncheckedUpdateWithoutImagesInput>
    create: XOR<UsersCreateWithoutImagesInput, UsersUncheckedCreateWithoutImagesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutImagesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutImagesInput, UsersUncheckedUpdateWithoutImagesInput>
  }

  export type UsersUpdateWithoutImagesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    Comments?: CommentsUpdateManyWithoutUsersNestedInput
    SavedImages?: SavedImagesUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    Comments?: CommentsUncheckedUpdateManyWithoutUsersNestedInput
    SavedImages?: SavedImagesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type SavedImagesUpsertWithWhereUniqueWithoutImagesInput = {
    where: SavedImagesWhereUniqueInput
    update: XOR<SavedImagesUpdateWithoutImagesInput, SavedImagesUncheckedUpdateWithoutImagesInput>
    create: XOR<SavedImagesCreateWithoutImagesInput, SavedImagesUncheckedCreateWithoutImagesInput>
  }

  export type SavedImagesUpdateWithWhereUniqueWithoutImagesInput = {
    where: SavedImagesWhereUniqueInput
    data: XOR<SavedImagesUpdateWithoutImagesInput, SavedImagesUncheckedUpdateWithoutImagesInput>
  }

  export type SavedImagesUpdateManyWithWhereWithoutImagesInput = {
    where: SavedImagesScalarWhereInput
    data: XOR<SavedImagesUpdateManyMutationInput, SavedImagesUncheckedUpdateManyWithoutImagesInput>
  }

  export type SavedImagesScalarWhereInput = {
    AND?: SavedImagesScalarWhereInput | SavedImagesScalarWhereInput[]
    OR?: SavedImagesScalarWhereInput[]
    NOT?: SavedImagesScalarWhereInput | SavedImagesScalarWhereInput[]
    userId?: IntFilter<"SavedImages"> | number
    imageId?: IntFilter<"SavedImages"> | number
    savedDate?: DateTimeNullableFilter<"SavedImages"> | Date | string | null
  }

  export type UsersCreateWithoutSavedImagesInput = {
    email: string
    password: string
    fullName: string
    age?: number | null
    avatar?: string | null
    Comments?: CommentsCreateNestedManyWithoutUsersInput
    Images?: ImagesCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutSavedImagesInput = {
    id?: number
    email: string
    password: string
    fullName: string
    age?: number | null
    avatar?: string | null
    Comments?: CommentsUncheckedCreateNestedManyWithoutUsersInput
    Images?: ImagesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutSavedImagesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutSavedImagesInput, UsersUncheckedCreateWithoutSavedImagesInput>
  }

  export type ImagesCreateWithoutSavedImagesInput = {
    title: string
    url: string
    description?: string | null
    Comments?: CommentsCreateNestedManyWithoutImagesInput
    Users?: UsersCreateNestedOneWithoutImagesInput
  }

  export type ImagesUncheckedCreateWithoutSavedImagesInput = {
    id?: number
    title: string
    url: string
    description?: string | null
    userId?: number | null
    Comments?: CommentsUncheckedCreateNestedManyWithoutImagesInput
  }

  export type ImagesCreateOrConnectWithoutSavedImagesInput = {
    where: ImagesWhereUniqueInput
    create: XOR<ImagesCreateWithoutSavedImagesInput, ImagesUncheckedCreateWithoutSavedImagesInput>
  }

  export type UsersUpsertWithoutSavedImagesInput = {
    update: XOR<UsersUpdateWithoutSavedImagesInput, UsersUncheckedUpdateWithoutSavedImagesInput>
    create: XOR<UsersCreateWithoutSavedImagesInput, UsersUncheckedCreateWithoutSavedImagesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutSavedImagesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutSavedImagesInput, UsersUncheckedUpdateWithoutSavedImagesInput>
  }

  export type UsersUpdateWithoutSavedImagesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    Comments?: CommentsUpdateManyWithoutUsersNestedInput
    Images?: ImagesUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutSavedImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    Comments?: CommentsUncheckedUpdateManyWithoutUsersNestedInput
    Images?: ImagesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type ImagesUpsertWithoutSavedImagesInput = {
    update: XOR<ImagesUpdateWithoutSavedImagesInput, ImagesUncheckedUpdateWithoutSavedImagesInput>
    create: XOR<ImagesCreateWithoutSavedImagesInput, ImagesUncheckedCreateWithoutSavedImagesInput>
    where?: ImagesWhereInput
  }

  export type ImagesUpdateToOneWithWhereWithoutSavedImagesInput = {
    where?: ImagesWhereInput
    data: XOR<ImagesUpdateWithoutSavedImagesInput, ImagesUncheckedUpdateWithoutSavedImagesInput>
  }

  export type ImagesUpdateWithoutSavedImagesInput = {
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Comments?: CommentsUpdateManyWithoutImagesNestedInput
    Users?: UsersUpdateOneWithoutImagesNestedInput
  }

  export type ImagesUncheckedUpdateWithoutSavedImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    Comments?: CommentsUncheckedUpdateManyWithoutImagesNestedInput
  }

  export type CommentsCreateWithoutUsersInput = {
    commentDate?: Date | string | null
    content: string
    Images?: ImagesCreateNestedOneWithoutCommentsInput
  }

  export type CommentsUncheckedCreateWithoutUsersInput = {
    id?: number
    imageId?: number | null
    commentDate?: Date | string | null
    content: string
  }

  export type CommentsCreateOrConnectWithoutUsersInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutUsersInput, CommentsUncheckedCreateWithoutUsersInput>
  }

  export type CommentsCreateManyUsersInputEnvelope = {
    data: CommentsCreateManyUsersInput | CommentsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type ImagesCreateWithoutUsersInput = {
    title: string
    url: string
    description?: string | null
    Comments?: CommentsCreateNestedManyWithoutImagesInput
    SavedImages?: SavedImagesCreateNestedManyWithoutImagesInput
  }

  export type ImagesUncheckedCreateWithoutUsersInput = {
    id?: number
    title: string
    url: string
    description?: string | null
    Comments?: CommentsUncheckedCreateNestedManyWithoutImagesInput
    SavedImages?: SavedImagesUncheckedCreateNestedManyWithoutImagesInput
  }

  export type ImagesCreateOrConnectWithoutUsersInput = {
    where: ImagesWhereUniqueInput
    create: XOR<ImagesCreateWithoutUsersInput, ImagesUncheckedCreateWithoutUsersInput>
  }

  export type ImagesCreateManyUsersInputEnvelope = {
    data: ImagesCreateManyUsersInput | ImagesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type SavedImagesCreateWithoutUsersInput = {
    savedDate?: Date | string | null
    Images: ImagesCreateNestedOneWithoutSavedImagesInput
  }

  export type SavedImagesUncheckedCreateWithoutUsersInput = {
    imageId: number
    savedDate?: Date | string | null
  }

  export type SavedImagesCreateOrConnectWithoutUsersInput = {
    where: SavedImagesWhereUniqueInput
    create: XOR<SavedImagesCreateWithoutUsersInput, SavedImagesUncheckedCreateWithoutUsersInput>
  }

  export type SavedImagesCreateManyUsersInputEnvelope = {
    data: SavedImagesCreateManyUsersInput | SavedImagesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type CommentsUpsertWithWhereUniqueWithoutUsersInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutUsersInput, CommentsUncheckedUpdateWithoutUsersInput>
    create: XOR<CommentsCreateWithoutUsersInput, CommentsUncheckedCreateWithoutUsersInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutUsersInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutUsersInput, CommentsUncheckedUpdateWithoutUsersInput>
  }

  export type CommentsUpdateManyWithWhereWithoutUsersInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutUsersInput>
  }

  export type ImagesUpsertWithWhereUniqueWithoutUsersInput = {
    where: ImagesWhereUniqueInput
    update: XOR<ImagesUpdateWithoutUsersInput, ImagesUncheckedUpdateWithoutUsersInput>
    create: XOR<ImagesCreateWithoutUsersInput, ImagesUncheckedCreateWithoutUsersInput>
  }

  export type ImagesUpdateWithWhereUniqueWithoutUsersInput = {
    where: ImagesWhereUniqueInput
    data: XOR<ImagesUpdateWithoutUsersInput, ImagesUncheckedUpdateWithoutUsersInput>
  }

  export type ImagesUpdateManyWithWhereWithoutUsersInput = {
    where: ImagesScalarWhereInput
    data: XOR<ImagesUpdateManyMutationInput, ImagesUncheckedUpdateManyWithoutUsersInput>
  }

  export type ImagesScalarWhereInput = {
    AND?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
    OR?: ImagesScalarWhereInput[]
    NOT?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
    id?: IntFilter<"Images"> | number
    title?: StringFilter<"Images"> | string
    url?: StringFilter<"Images"> | string
    description?: StringNullableFilter<"Images"> | string | null
    userId?: IntNullableFilter<"Images"> | number | null
  }

  export type SavedImagesUpsertWithWhereUniqueWithoutUsersInput = {
    where: SavedImagesWhereUniqueInput
    update: XOR<SavedImagesUpdateWithoutUsersInput, SavedImagesUncheckedUpdateWithoutUsersInput>
    create: XOR<SavedImagesCreateWithoutUsersInput, SavedImagesUncheckedCreateWithoutUsersInput>
  }

  export type SavedImagesUpdateWithWhereUniqueWithoutUsersInput = {
    where: SavedImagesWhereUniqueInput
    data: XOR<SavedImagesUpdateWithoutUsersInput, SavedImagesUncheckedUpdateWithoutUsersInput>
  }

  export type SavedImagesUpdateManyWithWhereWithoutUsersInput = {
    where: SavedImagesScalarWhereInput
    data: XOR<SavedImagesUpdateManyMutationInput, SavedImagesUncheckedUpdateManyWithoutUsersInput>
  }

  export type CommentsCreateManyImagesInput = {
    id?: number
    userId?: number | null
    commentDate?: Date | string | null
    content: string
  }

  export type SavedImagesCreateManyImagesInput = {
    userId: number
    savedDate?: Date | string | null
  }

  export type CommentsUpdateWithoutImagesInput = {
    commentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    Users?: UsersUpdateOneWithoutCommentsNestedInput
  }

  export type CommentsUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    commentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
  }

  export type CommentsUncheckedUpdateManyWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    commentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
  }

  export type SavedImagesUpdateWithoutImagesInput = {
    savedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Users?: UsersUpdateOneRequiredWithoutSavedImagesNestedInput
  }

  export type SavedImagesUncheckedUpdateWithoutImagesInput = {
    userId?: IntFieldUpdateOperationsInput | number
    savedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SavedImagesUncheckedUpdateManyWithoutImagesInput = {
    userId?: IntFieldUpdateOperationsInput | number
    savedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentsCreateManyUsersInput = {
    id?: number
    imageId?: number | null
    commentDate?: Date | string | null
    content: string
  }

  export type ImagesCreateManyUsersInput = {
    id?: number
    title: string
    url: string
    description?: string | null
  }

  export type SavedImagesCreateManyUsersInput = {
    imageId: number
    savedDate?: Date | string | null
  }

  export type CommentsUpdateWithoutUsersInput = {
    commentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    Images?: ImagesUpdateOneWithoutCommentsNestedInput
  }

  export type CommentsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    commentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
  }

  export type CommentsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    commentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
  }

  export type ImagesUpdateWithoutUsersInput = {
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Comments?: CommentsUpdateManyWithoutImagesNestedInput
    SavedImages?: SavedImagesUpdateManyWithoutImagesNestedInput
  }

  export type ImagesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Comments?: CommentsUncheckedUpdateManyWithoutImagesNestedInput
    SavedImages?: SavedImagesUncheckedUpdateManyWithoutImagesNestedInput
  }

  export type ImagesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SavedImagesUpdateWithoutUsersInput = {
    savedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Images?: ImagesUpdateOneRequiredWithoutSavedImagesNestedInput
  }

  export type SavedImagesUncheckedUpdateWithoutUsersInput = {
    imageId?: IntFieldUpdateOperationsInput | number
    savedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SavedImagesUncheckedUpdateManyWithoutUsersInput = {
    imageId?: IntFieldUpdateOperationsInput | number
    savedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}